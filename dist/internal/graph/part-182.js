import { zd } from "./part-146.js";
import { Kd } from "./part-155.js";
import { fe } from "./part-175.js";
import { l } from "./part-18.js";
let te = (a) => {
  let h, c = a.element, d = a.name, e = c.current;
  if (!e) return;
  if (d == "height") a.suspendedScrollY = window.pageYOffset;
  let f = a.unresolvedKeyframes;
  a.measuredOrigin = fe((h = c, d), zd(h), l(e));
  f[0] = a.measuredOrigin;
  let g = f[f.length - 1];
  if (g !== void 0) {
    let a2;
    (a2 = c, Kd(a2, d, g, true)).jump(g, false);
  }
};
export {
  te
};
