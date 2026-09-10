export const workloads = [
 {id:'mini-transform-64',label:'WAAPI transform + opacity · 64 elements',api:'animateMini',kind:'transform',count:64},
 {id:'mini-transform-256',label:'WAAPI transform + opacity · 256 elements',api:'animateMini',kind:'transform',count:256},
 {id:'mini-layout-128',label:'WAAPI width + margin layout · 128 elements',api:'animateMini',kind:'layout',count:128},
 {id:'animate-transform-128',label:'animate transform + opacity · 128 elements',api:'animate',kind:'transform',count:128},
 {id:'animate-xy-128',label:'animate x/y · 128 elements',api:'animate',kind:'xy',count:128},
 {id:'animate-layout-128',label:'Width + margin layout · 128 elements',api:'animate',kind:'layout',count:128},
 {id:'motion-values-128',label:'MotionValue + DOM writes · 128 values',api:'animate',kind:'values',count:128},
];
const frame=()=>new Promise(resolve=>requestAnimationFrame(resolve));
let runtime,scenario,elements,controls=[],values=[],disposers=[];
export async function prepare(lane,id){
 runtime=await import('./inputs/'+lane+'.js');scenario=workloads.find(x=>x.id===id);if(!scenario)throw new Error('Unknown workload');
 document.body.innerHTML='<main id="stage"></main>';
 document.head.querySelector('#fixture-style')?.remove();const style=document.createElement('style');style.id='fixture-style';style.textContent='html,body{margin:0;padding:0;background:#151610}#stage{position:relative;width:1024px;min-height:700px;padding:16px;font-size:0}.dot{display:inline-block;width:16px;height:16px;margin:2px;background:#6847f5;opacity:.25;vertical-align:top;border-radius:3px}';document.head.append(style);
 const stage=document.querySelector('#stage');elements=[];controls=[];values=[];disposers=[];
 for(let i=0;i<scenario.count;i++){const el=document.createElement('span');el.className='dot';if(scenario.kind!=='layout'){el.style.position='absolute';el.style.left=(16+(i%32)*29)+'px';el.style.top=(16+Math.floor(i/32)*29)+'px'}stage.append(el);elements.push(el)}
 stage.getBoundingClientRect();await frame();await frame();
 return {api:scenario.api,count:elements.length};
}
function launch(){
 const options={duration:.6,ease:'linear'};
 if(scenario.kind==='values'){
  for(const el of elements){const v=runtime.motionValue(0);disposers.push(v.on('change',x=>{el.style.transform=`translateX(${x}px)`;el.style.opacity=String(.25+.75*x/24)}));values.push(v);controls.push(runtime.animate(v,[0,24],options));}
 }else{
  const keyframes=scenario.kind==='layout'?{width:[16,28],marginRight:[2,6],opacity:[.25,1]}:scenario.kind==='xy'?{x:[0,24],y:[0,12],opacity:[.25,1]}:{transform:['translate(0px, 0px)','translate(24px, 12px)'],opacity:[.25,1]};
  controls.push(runtime[scenario.api](elements,keyframes,options));
 }
}
function snapshot(){
 return elements.map(el=>{const s=getComputedStyle(el),matrix=s.transform==='none'?new DOMMatrix():new DOMMatrix(s.transform);return {opacity:+s.opacity,x:matrix.m41,y:matrix.m42,width:parseFloat(s.width),marginRight:parseFloat(s.marginRight)}});
}
function stop(){for(const c of controls)c?.stop?.();for(const d of disposers)d?.();for(const v of values)v?.destroy?.();controls=[];disposers=[];values=[];}
export async function validate(){
 launch();for(const c of controls)c.pause();const samples=[];
 for(const p of [.0,.25,.5,.75,1]){for(const c of controls)c.time=.6*p;await frame();await frame();samples.push({progress:p,values:snapshot()});}
 stop();return samples;
}
export async function measure(){
 const gaps=[];let previous=performance.now(),done=false;const start=performance.now();
 const tick=now=>{gaps.push(now-previous);previous=now;if(!done)requestAnimationFrame(tick)};requestAnimationFrame(tick);
 const t=performance.now();launch();const setupMs=performance.now()-t;
 await new Promise(resolve=>setTimeout(resolve,800));await frame();done=true;
 const final=snapshot();const nativeAnimations=document.getAnimations().length;
 const elapsedMs=performance.now()-start;stop();
 return {setupMs,elapsedMs,frameIntervals:gaps,final,nativeAnimations,elements:elements.length};
}
window.motionMeasurement={prepare,validate,measure};
