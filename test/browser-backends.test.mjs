import assert from 'node:assert/strict'
import {readFileSync} from 'node:fs'
import {createServer} from 'node:http'
import {before,after,test} from 'node:test'
import {chromium} from 'playwright'
let server,browser,origin
before(async()=>{
 const sources={'/original.js':readFileSync('site/esm-comparison/original.js'),'/lilscript.js':readFileSync('dist/index.bundle.js'),'/full.js':readFileSync('dist/full.bundle.js')}
 server=createServer((req,res)=>{res.setHeader('Content-Type',req.url in sources?'text/javascript':'text/html');res.end(sources[req.url]??'<!doctype html><body></body>')})
 await new Promise(r=>server.listen(0,'127.0.0.1',r));origin='http://127.0.0.1:'+server.address().port
 browser=await chromium.launch({headless:true})
})
after(async()=>{await browser?.close();if(server)await new Promise(r=>server.close(r))})
const cases=[
 {name:'mini Bezier easing and repeat controls match',api:'animateMini',keyframes:{opacity:[.25,1]},options:{ease:[.42,0,.58,1],repeat:1,repeatType:'reverse'}},
 {name:'mini segmented easing matches',api:'animateMini',keyframes:{opacity:[.25,.5,1]},options:{ease:['easeIn','easeOut']}},
 {name:'mini spring generator matches',api:'animateMini',keyframes:{opacity:[.25,1]},springFunction:true,options:{stiffness:150,damping:20}},
 {name:'function easing matches',keyframes:{opacity:[.25,1]},functionEase:true},
 {name:'anticipate easing matches',keyframes:{opacity:[.25,1]},options:{ease:'anticipate'}},
 {name:'JavaScript function easing matches',keyframes:{x:[0,24]},functionEase:true},
 {name:'opacity uses native animation',keyframes:{opacity:[.25,1]}},
 {name:'string transforms use native animation',keyframes:{transform:['translate(0px, 0px)','translate(24px, 12px)'],opacity:[.25,1]}},
 {name:'x/y and opacity use the same mixed backends',keyframes:{x:[0,24],y:[0,12],opacity:[.25,1]}},
 {name:'width/margin and opacity use the same mixed backends',keyframes:{width:[16,28],marginRight:[2,6],opacity:[.25,1]}},
 {name:'reverse repeat retains native timing',keyframes:{opacity:[.25,1]},options:{repeat:1,repeatType:'reverse'}},
 {name:'repeat delay selects JavaScript',keyframes:{opacity:[.25,1]},options:{repeat:1,repeatDelay:.1}},
 {name:'mirror repeat selects JavaScript',keyframes:{opacity:[.25,1]},options:{repeat:1,repeatType:'mirror'}},
 {name:'cross-realm elements select JavaScript',keyframes:{opacity:[.25,1]},iframe:true},
 {name:'native construction failure falls back to JavaScript',keyframes:{opacity:[.25,1]},rejectNative:true},
 {name:'Bezier easing is retained',keyframes:{opacity:[.25,1]},options:{ease:[.42,0,.58,1]}},
 {name:'per-keyframe easing is retained',keyframes:{opacity:[.25,.5,1]},options:{ease:['easeIn','easeOut']}},
 {name:'JS string values interpolate',keyframes:{transform:['translateX(0px)','translateX(24px)']},options:{repeat:1,repeatDelay:.1}},
 {name:'spring opacity uses the same native easing',keyframes:{opacity:[.25,1]},options:{type:'spring',stiffness:150,damping:20}},
 {name:'spring strings interpolate in JavaScript',keyframes:{transform:['translateX(0px)','translateX(24px)']},options:{type:'spring',stiffness:150,damping:20,repeatDelay:.1,repeat:1}},
 {name:'JavaScript Bezier easing is retained',keyframes:{x:[0,24]},options:{ease:[.42,0,.58,1]}},
 {name:'JavaScript segment easing is retained',keyframes:{x:[0,12,24]},options:{ease:['easeIn','easeOut']}},
 {name:'autoplay false remains paused',keyframes:{opacity:[.25,1]},options:{autoplay:false}},
 {name:'JS colors interpolate',keyframes:{backgroundColor:['#000000','#ffffff']},options:{repeat:1,repeatDelay:.1}},
]
async function inspect(lane,scenario){
 const page=await browser.newPage()
 try{
  await page.goto(origin)
  return await page.evaluate(async({lane,scenario})=>{
   let doc=document
   if(scenario.iframe){const frame=document.createElement('iframe');document.body.append(frame);doc=frame.contentDocument}
   const el=doc.createElement('div');el.style.cssText='width:16px;height:16px;margin-right:2px;opacity:.25;background-color:#000';doc.body.append(el)
   const calls=[],prototype=doc.defaultView.Element.prototype,native=prototype.animate
   prototype.animate=function(keyframes,options){if(this.isConnected){calls.push({keyframes,options});if(scenario.rejectNative)throw new Error('Test native rejection')};return native.call(this,keyframes,options)}
   const m=await import('/'+lane+'.js')
   const options={duration:.6,ease:'linear',...scenario.options}
   if(scenario.springFunction)options.type=m.spring
   if(scenario.functionEase)options.ease=p=>p*p
   const control=m[scenario.api??'animate'](el,scenario.keyframes,options)
   control.pause()
   const duration=control.duration,speed=control.speed,samples=[]
   for(const progress of [0,.25,.5,.75,1]){
    control.time=.6*progress
    await new Promise(requestAnimationFrame);await new Promise(requestAnimationFrame)
    const s=doc.defaultView.getComputedStyle(el),matrix=s.transform==='none'?new DOMMatrix():new DOMMatrix(s.transform)
    samples.push({opacity:+s.opacity,x:matrix.m41,y:matrix.m42,width:parseFloat(s.width),marginRight:parseFloat(s.marginRight),backgroundColor:s.backgroundColor})
   }
   control.stop()
   return{calls,duration,speed,samples}
  },{lane,scenario})
 }finally{await page.close()}
}
for(const scenario of cases)test(scenario.name,async()=>{
 const expected=await inspect('original',scenario)
 for(const lane of ['lilscript','full']){
  const actual=await inspect(lane,scenario)
  assert.deepEqual(actual.calls,expected.calls,lane+': native backend options')
  assert.equal(actual.duration,expected.duration,lane+': duration')
  assert.equal(actual.speed,expected.speed,lane+': speed')
  for(let i=0;i<actual.samples.length;i++)for(const key of Object.keys(expected.samples[i])){
   const a=actual.samples[i][key],b=expected.samples[i][key]
   if(typeof a==='number')assert.ok(Math.abs(a-b)<(key==='opacity'?.02:.6),`${lane}: sample ${i} ${key}: ${a} vs ${b}`)
   else assert.equal(a,b,`${lane}: sample ${i} ${key}`)
  }
 }
})

test('native control access matches Motion without unrelated effect timing reads',async()=>{
 async function inspectReads(lane){
  const page=await browser.newPage()
  try{
   await page.goto(origin)
   return await page.evaluate(async lane=>{
    const m=await import('/'+lane+'.js'),el=document.createElement('div')
    el.style.opacity='.25';document.body.append(el)
    let reads=0
    const native=KeyframeEffect.prototype.getComputedTiming
    KeyframeEffect.prototype.getComputedTiming=function(){reads++;return native.call(this)}
    const control=m.animateMini(el,{opacity:[.25,1]},{duration:.6,ease:'linear'})
    const counts={setup:reads}
    control.pause();control.time=.2
    const values={time:control.time,speed:control.speed,state:control.state}
    counts.playback=reads
    values.duration=control.duration;counts.duration=reads
    values.iterationDuration=control.iterationDuration;counts.iterationDuration=reads
    control.stop();counts.stop=reads
    return{values,counts}
   },lane)
  }finally{await page.close()}
 }
 const expected=await inspectReads('original')
 for(const lane of ['lilscript','full'])assert.deepEqual(await inspectReads(lane),expected,lane)
})
