import assert from 'node:assert/strict'
import {readFileSync,writeFileSync,mkdtempSync,mkdirSync,symlinkSync,cpSync,rmSync} from 'node:fs'
import {resolve,dirname,join,basename} from 'node:path'
import {fileURLToPath} from 'node:url'
import {spawnSync} from 'node:child_process'
import {createServer} from 'node:http'
import os from 'node:os'
import {chromium} from 'playwright'
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..'),dir=join(root,'comparison/mangling'),art=join(dir,'artifacts')
const records={public:[],closed:[]}
for(const mode of ['identifiers','public-properties']){
 const temp=mkdtempSync(join(os.tmpdir(),'motion-mangling-check-'))
 try{
  mkdirSync(join(temp,'dist'));mkdirSync(join(temp,'site/esm-comparison'),{recursive:true})
  writeFileSync(join(temp,'package.json'),'{"type":"module"}')
  symlinkSync(join(root,'node_modules'),join(temp,'node_modules'),'dir')
  cpSync(join(root,'test'),join(temp,'test'),{recursive:true})
  symlinkSync(join(art,'full-identifiers-original.js'),join(temp,'site/esm-comparison/original.js'))
  symlinkSync(join(art,`full-${mode}-original.js`),join(temp,'dist/index.bundle.js'))
  symlinkSync(join(art,`full-${mode}-lilscript.js`),join(temp,'dist/full.bundle.js'))
  const tests=['browser-controls','browser-runtime','browser-backends','browser-lifecycle'].map(x=>'test/'+x+'.test.mjs')
  const run=spawnSync(process.execPath,['--test',...tests],{cwd:temp,encoding:'utf8'})
  const log=run.stdout+run.stderr;writeFileSync(join(dir,`validation-${mode}.log`),log)
  const passed=+(log.match(/^# pass (\d+)/m)?.[1]??0),failed=+(log.match(/^# fail (\d+)/m)?.[1]??0)
  records.public.push({mode,passed,failed,exitCode:run.status,reference:'Unmangled-property original ESM; both re-minified lanes are compared with that reference.'})
  console.log(mode,passed,'pass',failed,'fail');
 }finally{rmSync(temp,{recursive:true,force:true})}
}
const server=createServer((req,res)=>{
 try{const name=basename(new URL(req.url,'http://local').pathname)
  if(name.endsWith('.js')){res.setHeader('Content-Type','text/javascript');res.end(readFileSync(join(art,name)))}
  else{res.setHeader('Content-Type','text/html');res.end('<!doctype html><body></body>')}
 }catch{res.writeHead(404);res.end()}
})
await new Promise(r=>server.listen(0,'127.0.0.1',r));const origin='http://127.0.0.1:'+server.address().port
const browser=await chromium.launch({headless:true}),browserVersion=browser.version()
async function scenario(file,kind){
 const page=await browser.newPage()
 try{
  await page.addInitScript(()=>{
   let now=1000,id=0,requested=0,executed=0;const queue=new Map()
   Object.defineProperty(performance,'now',{value:()=>now})
   window.requestAnimationFrame=fn=>{requested++;queue.set(++id,fn);return id}
   window.cancelAnimationFrame=id=>queue.delete(id)
   globalThis['__mangleClock']={
    'pending':()=>queue.size,
    'counts':()=>[requested,executed,queue.size],
    'frame':async t=>{now=t;const tasks=[...queue.values()];queue.clear();for(const fn of tasks){executed++;fn(now)}for(let i=0;i<16;i++)await Promise.resolve()}
   }
  })
  await page.goto(origin)
  return await page.evaluate(async({file,kind})=>{
   const runtime=await import('/'+file),result=JSON.parse(await runtime.runScenario(kind))
   return [result,globalThis['__mangleClock']['counts']()]
  },{file,kind})
 }finally{await page.close()}
}
try{
 for(const kind of ['mini','mini-repeat','transform','xy','layout','colors','values','mix','subscription']){
  const expected=await scenario('closed-app-identifiers-original.js',kind)
  for(const scope of ['closed-app','closed-full'])for(const mode of ['identifiers','closed-properties'])for(const lane of ['original','lilscript']){
   const file=`${scope}-${mode}-${lane}.js`
   let actual,error=null
   try{actual=await scenario(file,kind);assert.deepEqual(actual,expected)}catch(e){error=String(e);console.log(file,kind,'FAIL',error.slice(0,220))}
   records.closed.push({scope,mode,lane,kind,matches:error===null,...error?{error,expected,actual}:{result:actual}})
  }
  console.log(kind,'checked')
 }
}finally{await browser.close();await new Promise(r=>server.close(r))}
records.browser=browserVersion;records.complete=records.public.every(x=>x.exitCode===0)&&records.closed.every(x=>x.matches)
writeFileSync(join(dir,'validation.json'),JSON.stringify(records,null,2)+'\n')
if(!records.complete)process.exitCode=1
