import { zd } from "./part-146.js";
import { Kd } from "./part-155.js";
import { fe } from "./part-175.js";
import { l } from "./part-18.js";
import { se } from "./part-181.js";
let ue = (a) => {
  let k, c = a.element, d = a.name, e = c.current;
  if (!e) return;
  let f = Kd(c, d, null, false);
  if (f != null) f.jump(a.measuredOrigin, false);
  let g = a.unresolvedKeyframes, h = g.length - 1, i = g[h];
  g[h] = fe((k = c, d), zd(k), l(e));
  if (i !== null && a.finalKeyframe === void 0) a.finalKeyframe = i;
  se(a);
};
export {
  ue
};
