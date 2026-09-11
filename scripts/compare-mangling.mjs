import {readFileSync,writeFileSync,mkdirSync} from 'node:fs'
import {resolve,dirname,join} from 'node:path'
import {fileURLToPath} from 'node:url'
import {createHash} from 'node:crypto'
import {execFileSync} from 'node:child_process'
import os from 'node:os'
import {build} from '../comparison/mangling/toolchain/node_modules/esbuild/lib/main.js'
import {minify} from '../comparison/mangling/toolchain/node_modules/terser/main.js'
import {parse} from '../comparison/mangling/toolchain/node_modules/terser/lib/parse.js'
import {TreeWalker,AST_String} from '../comparison/mangling/toolchain/node_modules/terser/lib/ast.js'
import ts from 'typescript'
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..'),dir=join(root,'comparison/mangling')
const hash=s=>createHash('sha256').update(s).digest('hex')
const json=p=>JSON.parse(readFileSync(p,'utf8'))
const original=join(dir,'inputs/original-source.esm.js'),port=join(root,'dist/full.js')
const api=Object.keys(await import(original)),portApi=Object.keys(await import(port)),defaultApi=Object.keys(await import(join(root,'dist/index.js')))
if(api.some(name=>!portApi.includes(name)))throw Error('The port is missing original export names')
const publicNames=new Set(),browserNames=new Set(),typeInputs=[]
for(const file of ['node_modules/motion-dom/dist/index.d.ts','node_modules/motion-utils/dist/index.d.ts','node_modules/framer-motion/dist/index.d.ts','types/index.d.ts','types/motion-dom.d.ts','types/motion-utils.d.ts','node_modules/typescript/lib/lib.dom.d.ts']){
 const text=readFileSync(join(root,file),'utf8');typeInputs.push({path:file,sha256:hash(text)})
 const tree=ts.createSourceFile(file,text,ts.ScriptTarget.Latest,true)
 function visit(node){
  if((ts.isPropertySignature(node)||ts.isMethodSignature(node)||ts.isPropertyDeclaration(node)||ts.isMethodDeclaration(node)||ts.isGetAccessorDeclaration(node)||ts.isSetAccessorDeclaration(node))&&node.name){
   if(!node.modifiers?.some(m=>m.kind===ts.SyntaxKind.PrivateKeyword||m.kind===ts.SyntaxKind.ProtectedKeyword)){
    if(ts.isIdentifier(node.name)||ts.isStringLiteral(node.name)||ts.isNumericLiteral(node.name))(file.endsWith('/lib.dom.d.ts')?browserNames:publicNames).add(node.name.text)
   }
  }
  ts.forEachChild(node,visit)
 }
 visit(tree)
}
mkdirSync(join(dir,'artifacts'),{recursive:true})
const bundled={}
const scopes=[['full',api],['consumer-api',api.filter(x=>defaultApi.includes(x))]]
for(const [scope,names] of scopes){
 for(const [lane,entry] of [['original',original],['lilscript',port]]){
  const started=performance.now()
  const result=await build({stdin:{contents:`export {${names.join(',')}} from ${JSON.stringify(entry)};`,resolveDir:root},bundle:true,format:'esm',platform:'browser',target:'es2022',write:false,treeShaking:true,legalComments:'none',conditions:['browser','import','production'],define:{'process.env.NODE_ENV':'"production"'},metafile:true,logLevel:'silent'})
  const code=result.outputFiles[0].text
  bundled[scope+'-'+lane]={code,bundleSeconds:(performance.now()-started)/1000,inputs:Object.entries(result.metafile.inputs).map(([path,data])=>({path,bytes:data.bytes}))}
 }
}
const caller=readFileSync(join(dir,'consumer.mjs'),'utf8')
for(const scope of ['closed-app','closed-full'])for(const [lane,entry] of [['original',original],['lilscript',port]]){
 const roots=scope==='closed-full'?`\nexport {${api.map((name,i)=>name+' as e'+i).join(',')}} from ${JSON.stringify(entry)};`:''
 const result=await build({stdin:{contents:caller.replace("'@motion-comparison/runtime'",JSON.stringify(entry))+roots,resolveDir:root},bundle:true,format:'esm',platform:'browser',target:'es2022',write:false,treeShaking:true,legalComments:'none',conditions:['browser','import','production'],define:{'process.env.NODE_ENV':'"production"'},logLevel:'silent'})
 bundled[scope+'-'+lane]={code:result.outputFiles[0].text}
}
// Runtime-computed names cannot be changed by a spelling-only property pass.
// Both lanes reserve the same union, including pooled string lists and event keys.
const dynamicNames=new Set(['runScenario'])
for(const value of Object.values(bundled))parse(value.code,{module:true}).walk(new TreeWalker(function(node){
 if(node instanceof AST_String)for(const name of node.value.match(/[A-Za-z_$][\w$]*/g)??[]){dynamicNames.add(name);dynamicNames.add('on'+name)}
}))
const publicReserved=[...new Set([...publicNames,...browserNames,...dynamicNames])].sort()
const closedReserved=[...new Set([...browserNames,...dynamicNames])].sort()
const externs={schemaVersion:1,publicContract:publicReserved,closedHostAndDynamicNames:closedReserved,typeInputs,browserBuiltins:'Terser builtins:false preserves its JS/DOM property list in both lanes',dynamicProtocol:'Identifier-shaped words in every string literal in either full input, plus on-prefixed event forms, remain unchanged in both lanes.'}
writeFileSync(join(dir,'externs.json'),JSON.stringify(externs,null,2)+'\n')
const modes=[['identifiers',{toplevel:true}],['public-properties',{toplevel:true,properties:{builtins:false,keep_quoted:false,reserved:publicReserved}}]]
const measurements=[]
for(const [scope,names] of scopes)for(const [mode,mangle] of modes)for(const lane of ['original','lilscript']){
 const input=bundled[scope+'-'+lane],name=`${scope}-${mode}-${lane}.js`,cache={}
 const start=performance.now(),result=await minify(input.code,{module:true,ecma:2022,compress:{passes:3},mangle,nameCache:cache,format:{comments:false}})
 const code=result.code+'\n';writeFileSync(join(dir,'artifacts',name),code)
 const outputNames=Object.keys(await import(join(dir,'artifacts',name)))
 if(outputNames.sort().join()!==[...names].sort().join())throw Error('Exports drifted: '+name)
 measurements.push({scope,mode,lane,file:'artifacts/'+name,exports:names.length,bundleSeconds:input.bundleSeconds,minifySeconds:(performance.now()-start)/1000,sha256:hash(code),mangledProperties:Object.keys(cache.props?.props??{}).length})
 writeFileSync(join(dir,'artifacts',name+'.names.json'),JSON.stringify(cache,null,2)+'\n')
}
for(const scope of ['closed-app','closed-full'])for(const mode of ['identifiers','closed-properties'])for(const lane of ['original','lilscript']){
 const input=bundled[scope+'-'+lane],name=`${scope}-${mode}-${lane}.js`,cache={}
 const mangle={toplevel:true,...(mode==='closed-properties'?{properties:{builtins:false,keep_quoted:false,reserved:closedReserved}}:{})}
 const start=performance.now(),result=await minify(input.code,{module:true,ecma:2022,compress:{passes:3},mangle,nameCache:cache,format:{comments:false}})
 const code=result.code+'\n';writeFileSync(join(dir,'artifacts',name),code)
 measurements.push({scope,mode,lane,file:'artifacts/'+name,exports:scope==='closed-full'?api.length+1:1,minifySeconds:(performance.now()-start)/1000,sha256:hash(code),mangledProperties:Object.keys(cache.props?.props??{}).length})
 writeFileSync(join(dir,'artifacts',name+'.names.json'),JSON.stringify(cache,null,2)+'\n')
}
const codec=process.env.LILSCRIPT_CODEC??'/home/azureuser/lilscript/target/release/lilscript-codec'
const sizes=JSON.parse(execFileSync(codec,['--json',...measurements.map(x=>join(dir,x.file))],{encoding:'utf8'})).artifacts
for(let i=0;i<measurements.length;i++)Object.assign(measurements[i],Object.fromEntries(['raw','gzip9','brotli11'].map(k=>[k,sizes[i][k]])))
const result={schemaVersion:1,measuredAt:new Date().toISOString(),source:{motion:json(join(root,'site/comparison.json')).upstream,portCommit:process.env.MOTIONLIL_SOURCE_COMMIT??execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim(),compiler:json(join(root,'site/comparison.json')).compiler,originalAssemblySha256:hash(readFileSync(original)),originalAssembly:'Unminified ESM recorded from the pinned original source build, before its Terser pass.',portAssembly:'Unminified shared ESM modules from the recorded LilScript package build; compiler-proven internal property mangling is retained.'},machine:{cpu:os.cpus()[0].model,logicalCpus:os.cpus().length,memoryBytes:os.totalmem(),os:os.type()+' '+os.release(),node:process.version},toolchain:{esbuild:json(join(dir,'toolchain/node_modules/esbuild/package.json')).version,terser:json(join(dir,'toolchain/node_modules/terser/package.json')).version,target:'es2022',compressPasses:3,codecSha256:hash(readFileSync(codec)),gzip:9,brotli:11},modes:{identifiers:'Local/top-level identifiers mangled; public ESM export names and remaining property names preserved.',publicProperties:'All property names eligible under a shared public API, browser and dynamic-name extern contract are mangled on both sides.'},callerSha256:hash(caller),scriptSha256:hash(readFileSync(fileURLToPath(import.meta.url))),scope:{full:api.sort(),consumerApi:scopes[1][1].sort(),portOnlyExports:portApi.filter(x=>!api.includes(x)).sort()},externsSha256:hash(readFileSync(join(dir,'externs.json'))),measurements}
writeFileSync(join(dir,'results.json'),JSON.stringify(result,null,2)+'\n')
for(const x of measurements)console.log(x.scope,x.mode,x.lane,x.raw,x.gzip9,x.brotli11,'props',x.mangledProperties)
