import { getMixer } from "./part-53.js";
import { calcGeneratorDuration } from "./part-55.js";
import { keyframes } from "./part-66.js";
import { Za } from "./part-68.js";
let hb = (a) => {
  let b = a.options;
  Za(b);
  let c = b.type || keyframes, d = b.repeat ?? 0, e = b.repeatDelay ?? 0, f = b.velocity ?? 0, g = b.keyframes;
  if (c !== keyframes && typeof g[0] != "number") {
    let b2 = getMixer(g[0])(g[0], g[1]);
    a.mixKeyframes = (a2) => b2(a2 / 100);
    g = [0, 100];
  }
  let h = c(Object.assign({}, b, {
    keyframes: g
  }));
  if (b.repeatType === "mirror") a.mirroredGenerator = c(Object.assign({}, b, {
    keyframes: g.slice().reverse(),
    velocity: -f
  }));
  if (h.calculatedDuration === null) h.calculatedDuration = calcGeneratorDuration(h);
  let i = h.calculatedDuration;
  a.calculatedDuration = i;
  a.resolvedDuration = i + e;
  a.totalDuration = a.resolvedDuration * (d + 1) - e;
  a.generator = h;
};
export {
  hb
};
