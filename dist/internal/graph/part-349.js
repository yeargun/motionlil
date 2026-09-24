import { isMotionValue } from "./part-126.js";
import { Kd } from "./part-155.js";
import { isForcedMotionValue } from "./part-348.js";
import "./effect-499.js";
import "./effect-573.js";
let scrapeMotionValuesFromProps = function(a, b, c) {
  let d = a.style, e = b && b.style, f = {};
  if (!d) return f;
  for (let b2 in d) {
    let g = isMotionValue(d[b2]) || !!e && isMotionValue(e[b2]) || isForcedMotionValue(b2, a);
    if (!g && c) {
      let d2 = Kd(c, b2, null, false);
      g = d2 != null && d2.liveStyle != null;
    }
    if (g) f[b2] = d[b2];
  }
  return f;
};
export {
  scrapeMotionValuesFromProps
};
