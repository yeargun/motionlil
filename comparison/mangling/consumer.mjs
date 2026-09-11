import {animate,animateMini,motionValue,mixColor,mix,SubscriptionManager} from '@motion-comparison/runtime'

// This same caller is linked and minified with each library. Only the string
// scenario input and JSON-string result cross the closed application's boundary.
export async function runScenario(kind) {
 const clock=globalThis['__mangleClock']
 if(kind==='values') {
  const value=motionValue(0),updates=[],trace=[]
  let completed=0,fulfilled=0
  const control=animate(value,[0,24],{duration:.6,delay:.1,ease:'linear',onUpdate:x=>updates.push(x),onComplete:()=>completed++})
  control.finished.then(()=>fulfilled++)
  const snapshot=()=>trace.push([value.get(),control.time,control.speed,control.state,completed,fulfilled,[...updates],clock['pending']()])
  await clock['frame'](1000);await clock['frame'](1100);await clock['frame'](1200);snapshot()
  control.pause();await clock['frame'](1300);snapshot()
  control.time=.35;await clock['frame'](1320);snapshot()
  control.speed=2;control.play();await clock['frame'](1420);await clock['frame'](1520);await clock['frame'](1720);snapshot()
  control.play();await clock['frame'](1820);control.stop();await clock['frame'](1920);snapshot()
  value.destroy();return JSON.stringify(trace)
 }
 if(kind==='mix') {
  const color=mixColor('#123456','#fedcba'),complex=mix('translateX(0px)','translateX(40px)')
  return JSON.stringify([0,.25,.5,.75,1].map(p=>[color(p),complex(p)]))
 }
 if(kind==='subscription') {
  const manager=new SubscriptionManager(),trace=[]
  const remove=manager.add((a,b,c)=>trace.push([a,b,c]))
  manager.notify(1,2,3);remove();manager.notify(4,5,6)
  return JSON.stringify(trace)
 }
 const element=document.createElement('div')
 element.style.cssText='width:16px;height:16px;margin-right:2px;opacity:.25;background-color:#000;position:absolute'
 document.body.append(element)
 const keys=kind==='layout'?{width:[16,28],marginRight:[2,6],opacity:[.25,1]}:
  kind==='xy'?{x:[0,24],y:[0,12],opacity:[.25,1]}:
  kind==='colors'?{backgroundColor:['#000000','#ffffff']}:
  {transform:['translate(0px, 0px)','translate(24px, 12px)'],opacity:[.25,1]}
 const options={duration:.6,ease:'linear',...(kind==='colors'?{repeat:1,repeatDelay:.1}:kind==='mini-repeat'?{repeat:1,repeatType:'reverse'}:{})}
 const control=kind.startsWith('mini')?animateMini(element,keys,options):animate(element,keys,options)
 control.pause();const samples=[]
 for(const p of [0,.25,.5,.75,1]){
  control.time=.6*p;await clock['frame'](1000+p*100);await clock['frame'](1001+p*100)
  const style=getComputedStyle(element),matrix=style.transform==='none'?new DOMMatrix():new DOMMatrix(style.transform)
  samples.push([p,+style.opacity,matrix.m41,matrix.m42,parseFloat(style.width),parseFloat(style.marginRight),style.backgroundColor])
 }
 const native=document.getAnimations().map(a=>[a.effect.getKeyframes(),a.effect.getTiming(),a.playState])
 control.stop();await clock['frame'](1400);await clock['frame'](1420)
 element.remove();return JSON.stringify([samples,native,clock['pending']()])
}
