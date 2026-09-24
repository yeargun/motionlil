import { hc } from "./part-112.js";
import { motionValue } from "./part-14.js";
import { Hd } from "./part-152.js";
import { Jd } from "./part-154.js";
import { Kd } from "./part-155.js";
import { resolveVariant } from "./part-330.js";
import { isKeyframesTarget } from "./part-331.js";
import "./effect-499.js";
import "./effect-573.js";
let setTarget = function(a, b) {
  let d = resolveVariant(a, b) || {}, e = d.transitionEnd, f = {};
  for (let a2 in d) if (a2 != "transitionEnd" && a2 != "transition") f[a2] = d[a2];
  for (let a2 in e) f[a2] = e[a2];
  for (let b2 in f) {
    let c = f[b2];
    if (isKeyframesTarget(c)) c = c[c.length - 1 | 0] || 0;
    if (Jd(a, b2)) hc(Kd(a, b2, null, false), c);
    else Hd(a, b2, motionValue(c));
  }
};
export {
  setTarget
};
