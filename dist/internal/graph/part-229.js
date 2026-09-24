import { ec } from "./part-109.js";
import { lc } from "./part-115.js";
import { mc } from "./part-116.js";
import { oc } from "./part-118.js";
import { Wc } from "./part-122.js";
import { getAsType } from "./part-227.js";
import { z } from "./part-426.js";
import { y } from "./part-427.js";
let Of = (a, b, c, d, e, f) => {
  let g = a.values.get(b) ?? null;
  if (g) (0, g[1])();
  let i = (e2, g2, h) => {
    let i2 = oc(c);
    a.latest[b] = f ? getAsType(i2, Wc(b)) : i2;
    if (d) y.render(d, false, false);
  };
  i(null, null, null);
  let j = ec(c, "change", i);
  if (e) lc(c, e);
  let k = () => {
    j();
    if (d) z(d);
    a.values.delete(b);
    if (e) mc(c, e);
  };
  a.values.set(b, [c, k]);
  return k;
};
export {
  Of
};
