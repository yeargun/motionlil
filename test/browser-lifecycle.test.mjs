import assert from 'node:assert/strict'
import {readFileSync} from 'node:fs'
import {createServer} from 'node:http'
import {before,after,test} from 'node:test'
import {chromium} from 'playwright'
let server,browser,origin
before(async()=>{
 const sources={'/original.js':readFileSync('site/esm-comparison/original.js'),'/lilscript.js':readFileSync('dist/index.bundle.js'),'/full.js':readFileSync('dist/full.js')}
 server=createServer((req,res)=>{res.setHeader('Content-Type',req.url in sources?'text/javascript':'text/html');res.end(sources[req.url]??'<!doctype html><body></body>')})
 await new Promise(r=>server.listen(0,'127.0.0.1',r));origin='http://127.0.0.1:'+server.address().port
 browser=await chromium.launch({headless:true})
})
after(async()=>{await browser?.close();if(server)await new Promise(r=>server.close(r))})

async function lifecycle(lane,kind){
 const page=await browser.newPage()
 try{
  await page.goto(origin)
  return await page.evaluate(async({lane,kind})=>{
   let now=1000,nextId=0,ran=0,completed=0,fulfilled=0
   const pending=new Map(),updates=[],trace=[]
   Object.defineProperty(performance,'now',{value:()=>now})
   window.requestAnimationFrame=fn=>{pending.set(++nextId,fn);return nextId}
   window.cancelAnimationFrame=id=>pending.delete(id)
   const m=await import('/'+lane+'.js')
   const value=m.motionValue(0)
   const control=m.animate(value,[0,24],{duration:.6,delay:.1,ease:'linear',onUpdate:x=>updates.push(x),onComplete:()=>completed++})
   control.finished.then(()=>fulfilled++)
   async function frame(t){now=t;const callbacks=[...pending.values()];pending.clear();for(const fn of callbacks){ran++;fn(now)};for(let i=0;i<8;i++)await Promise.resolve()}
   function snapshot(label){trace.push({label,value:value.get(),time:control.time,speed:control.speed,state:control.state,startTime:control.startTime,duration:control.duration,iterationDuration:control.iterationDuration,scheduled:nextId,ran,pending:pending.size,updates:[...updates],completed,fulfilled})}
   await frame(1000);await frame(1100);await frame(1200);snapshot('playing')
   control.pause();snapshot('paused');await frame(1250);await frame(1300);snapshot('paused frames')
   control.time=.35;await frame(1320);snapshot('seek')
   if(kind==='resume'){
    control.speed=2;control.play();snapshot('resumed');await frame(1420);await frame(1520);await frame(1620);snapshot('completed')
    control.play();control.finished.then(()=>fulfilled++);snapshot('replay');await frame(1720);await frame(1920);await frame(2120);snapshot('replay completed')
   }else if(kind==='cancel'){
    control.cancel();await frame(1340);snapshot('cancelled');control.play();await frame(1440);snapshot('restarted')
   }else if(kind==='stop'){
    control.stop();await frame(1340);await frame(1360);snapshot('stopped');control.play();await frame(1460);snapshot('stopped play')
   }else if(kind==='reverse'){
    control.speed=-1;control.play();await frame(1420);await frame(1520);await frame(1720);snapshot('reverse complete')
   }
   control.stop();value.destroy();return trace
  },{lane,kind})
 }finally{await page.close()}
}
for(const kind of ['resume','cancel','stop','reverse'])test(kind+': controls, callbacks, completion and library RAF match Motion',async()=>{
 const expected=await lifecycle('original',kind)
 for(const lane of ['lilscript','full'])assert.deepEqual(await lifecycle(lane,kind),expected,lane)
})

test('render requested inside render phase runs in that frame',async()=>{
 const traces=[]
 for(const lane of ['original','lilscript','full']){
  const page=await browser.newPage()
  try{
   await page.goto(origin)
   traces.push(await page.evaluate(async lane=>{
    let now=1000,nextId=0;const pending=new Map()
    Object.defineProperty(performance,'now',{value:()=>now})
    window.requestAnimationFrame=fn=>{pending.set(++nextId,fn);return nextId}
    window.cancelAnimationFrame=id=>pending.delete(id)
    const m=await import('/'+lane+'.js'),el=document.createElement('div');document.body.append(el)
    const control=m.animate(el,{x:[0,24],y:[0,12]},{duration:.6,ease:'linear',autoplay:false})
    control.pause();control.time=0
    async function frame(){now+=20;const callbacks=[...pending.values()];pending.clear();for(const fn of callbacks)fn(now);await Promise.resolve();await Promise.resolve()}
    await frame();const trace=[]
    m.frame.render(()=>{control.time=.3})
    m.frame.postRender(()=>trace.push(el.style.transform))
    await frame();await frame();trace.push(el.style.transform);control.stop();return trace
   },lane))
  }finally{await page.close()}
 }
 assert.deepEqual(traces[1],traces[0]);assert.deepEqual(traces[2],traces[0])
})

test('native interruption preserves the sampled style and replacement keyframe without completing',async()=>{
 const results=[]
 for(const lane of ['original','lilscript','full']){
  const page=await browser.newPage()
  try{
   await page.goto(origin)
   results.push(await page.evaluate(async lane=>{
    let now=1000,nextId=0,completed=0,fulfilled=0;const pending=new Map()
    Object.defineProperty(performance,'now',{value:()=>now})
    window.requestAnimationFrame=fn=>{pending.set(++nextId,fn);return nextId}
    window.cancelAnimationFrame=id=>pending.delete(id)
    const m=await import('/'+lane+'.js'),el=document.createElement('div');el.style.opacity='.25';document.body.append(el)
    const calls=[],native=Element.prototype.animate
    Element.prototype.animate=function(keys,opts){if(this.isConnected)calls.push(keys);return native.call(this,keys,opts)}
    const first=m.animate(el,{opacity:[.25,1]},{duration:.6,ease:'linear',onComplete:()=>completed++})
    first.pause();first.finished.then(()=>fulfilled++)
    const start=first.startTime,state=first.state;
    now=1300;await Promise.resolve();first.stop();for(let i=0;i<8;i++)await Promise.resolve()
    const stopped=+el.style.opacity
    const second=m.animate(el,{opacity:[null,.9]},{duration:.6,ease:'linear'})
    second.pause();const replacement=calls.at(-1);second.stop()
    return {stopped,replacement,completed,fulfilled,start,state}
   },lane))
  }finally{await page.close()}
 }
 assert.deepEqual(results[1],results[0]);assert.deepEqual(results[2],results[0])
})
