import {readFileSync,writeFileSync} from 'node:fs';
import {createServer} from 'node:http';
import {resolve,join} from 'node:path';
import {createHash} from 'node:crypto';
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE??'playwright');
const root=resolve(process.argv[2]);
const server=createServer((req,res)=>{try{const path=resolve(root,'.'+new URL(req.url,'http://localhost').pathname.replace(/\/$/,'/index.html'));if(!path.startsWith(root+'/'))throw Error();res.setHeader('Content-Type',path.endsWith('.html')?'text/html':'text/javascript');res.end(readFileSync(path))}catch{res.writeHead(404);res.end()}});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const b=await chromium.launch({headless:true,args:['--disable-background-timer-throttling','--disable-renderer-backgrounding','--disable-backgrounding-occluded-windows']});
const metrics=JSON.parse(readFileSync(join(root,'performance.json'))),results=[];
for(const work of metrics.workloads.filter(x=>x.status==='measured')){
 const row={id:work.id,lanes:{}};
 for(const lane of ['original','lilscript']){
  row.lanes[lane]=[];
  for(let i=0;i<3;i++){
   const p=await b.newPage({viewport:{width:1280,height:900},deviceScaleFactor:1});await p.goto('http://127.0.0.1:'+server.address().port+'/');
   await p.evaluate(({lane,id})=>window.motionMeasurement.prepare(lane,id),{lane,id:work.id});
   const sampled=await p.evaluate(async ({kind,api})=>{
    const frames=[],start=performance.now(),running=window.motionMeasurement.measure();
    const elements=[...document.querySelectorAll('.dot')];
    await new Promise(resolve=>{function frame(now){
     const properties={};let opacity;
     for(const el of elements){
      const s=getComputedStyle(el);opacity??=+s.opacity;
      const progress={opacity:(+s.opacity-.25)/.75};
      if(kind==='layout'){progress.width=(parseFloat(s.width)-16)/12;progress.marginRight=(parseFloat(s.marginRight)-2)/4;}
      else{const m=s.transform==='none'?new DOMMatrix():new DOMMatrix(s.transform);progress.x=m.m41/24;if(kind!=='values')progress.y=m.m42/12;}
      for(const [name,value] of Object.entries(progress)){
       const range=properties[name]??={minimum:Infinity,maximum:-Infinity};
       range.minimum=Math.min(range.minimum,value);range.maximum=Math.max(range.maximum,value);
      }
     }
     const native=api==='animateMini'?document.getAnimations()[0]:null;
     const expectedProgress=native&&typeof native.currentTime==='number'?native.currentTime/600:(now-start)/600;
     frames.push({ms:now-start,expectedProgress,opacity,elementsChecked:elements.length,properties});
     if(now-start<720)requestAnimationFrame(frame);else resolve();
    }requestAnimationFrame(frame)});
    await running;return frames;
   },{kind:work.kind,api:work.api});
   const active=sampled.filter(x=>x.ms>60&&x.ms<560),changedByProperty={};
   for(const name of Object.keys(active[0]?.properties??{}))changedByProperty[name]=active.filter((x,i)=>i&&Math.abs(x.properties[name].minimum-active[i-1].properties[name].minimum)>.003).length;
   const changes=Math.min(...Object.values(changedByProperty));
   const error=Math.max(...active.flatMap(x=>Object.values(x.properties).flatMap(range=>[Math.abs(range.minimum-x.expectedProgress),Math.abs(range.maximum-x.expectedProgress)])));
   row.lanes[lane].push({samples:sampled,activeFrames:active.length,changedFrames:changes,changedByProperty,maxProgressError:error});await p.close();
  }
 }
 const minimumUpdateFraction=Math.min(...Object.values(row.lanes).flat().map(x=>x.changedFrames/Math.max(1,x.activeFrames-1)));
 row.matches=minimumUpdateFraction>=.9&&Object.values(row.lanes).flat().every(x=>x.activeFrames>=10&&x.maxProgressError<.08&&x.samples.every(f=>f.elementsChecked===work.count));
 row.minimumUpdateFraction=minimumUpdateFraction;results.push(row);console.log(row.id,row.matches?'MATCH':'MISMATCH',minimumUpdateFraction);
}
const result={measuredAt:new Date().toISOString(),browser:b.version(),protocol:'Separate untimed natural playback check; three fresh pages per lane; inspect every animated property of every element on every sampled frame. Record per-property minimum/maximum progress across all elements. Linear timeline deviation must be <8%, with every property advancing on at least 90% of active frames in both implementations. WAAPI progress is checked against native Animation.currentTime, accounting for the browser assigning its start time at the next rendering opportunity; JavaScript animation progress is checked against elapsed time. These intrusive style reads are not part of CPU timings.',harnessSha256:createHash('sha256').update(readFileSync(join(root,'harness.mjs'))).digest('hex'),checkerSha256:createHash('sha256').update(readFileSync(new URL(import.meta.url))).digest('hex'),results};
writeFileSync(join(root,'natural-validation.json'),JSON.stringify(result,null,2)+'\n');await b.close();await new Promise(resolve=>server.close(resolve));
if(results.some(x=>!x.matches))process.exitCode=1;
