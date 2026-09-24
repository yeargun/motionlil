import { clamp } from "./part-431.js";
import { inertia } from "./part-61.js";
import { getFinalKeyframe } from "./part-67.js";
import { ib } from "./part-71.js";
import { qb } from "./part-74.js";
let jb = (a, b, c) => {
  let d = a.generator, e = a.startTime;
  if (e == null) return d.next(0);
  let f = a.options, g = f.delay ?? 0, h = f.keyframes, i = f.repeat ?? 0, j = a.totalDuration, k = a.resolvedDuration;
  if (a.playbackSpeed > 0) a.startTime = Math.min(e, b);
  else if (a.playbackSpeed < 0) a.startTime = Math.min(b - j / a.playbackSpeed, e);
  if (c) a.currentTime = b;
  else ib(a, b);
  let l = a.currentTime - g * (a.playbackSpeed >= 0 ? 1 : -1), m = a.playbackSpeed >= 0 ? l < 0 : l > j;
  a.currentTime = Math.max(l, 0);
  if (a.state == "finished" && a.holdTime == null) a.currentTime = j;
  let n = a.currentTime, o = d;
  if (i) {
    let c2 = Math.min(a.currentTime, j) / k, d2 = Math.floor(c2), e2 = c2 % 1;
    if (e2 == 0 && c2 >= 1) e2 = 1;
    if (e2 == 1) --d2;
    d2 = Math.min(d2, i + 1);
    if (d2 % 2) {
      if (f.repeatType === "reverse") {
        e2 = 1 - e2;
        e2 = e2 - (f.repeatDelay || 0) / k;
      } else if (f.repeatType === "mirror") o = a.mirroredGenerator;
    }
    n = clamp(0, 1, e2) * k;
  }
  let p = a.delayState;
  if (m) p.value = h[0];
  else {
    p = o.next(n);
    let b2 = a.mixKeyframes;
    if (b2) p.value = b2(p.value);
  }
  let q = p.done;
  if (!m) q = a.playbackSpeed >= 0 ? a.currentTime >= j : a.currentTime <= 0;
  let r = a.holdTime == null && (a.state == "finished" || a.state == "running" && q);
  if (r && f.type !== inertia) p.value = getFinalKeyframe(h, f, f.finalKeyframe, a.playbackSpeed);
  if (f.onUpdate) f.onUpdate(p.value);
  if (r) {
    a._resolve();
    qb(a);
    a.state = "finished";
    if (f.onComplete) f.onComplete();
  }
  return p;
};
export {
  jb
};
