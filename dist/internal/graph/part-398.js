import { isMotionValue } from "./part-126.js";
import { animateTarget } from "./part-336.js";
import { animateSingleValue } from "./part-373.js";
import { Yi } from "./part-386.js";
import { Zi } from "./part-387.js";
import { kj } from "./part-397.js";
import { $c } from "./part-498.js";
let lj = function(a, b, c, d) {
  if (isMotionValue(a) || typeof a == "number" || typeof a == "string" && !Yi(b)) {
    let d2 = b;
    if (Yi(b)) {
      let a2 = b.default;
      if (a2) d2 = a2;
    }
    let e2 = c;
    if (c) {
      let a2 = c.default;
      if (a2) e2 = a2;
    }
    return [animateSingleValue(a, d2, e2)];
  }
  let e = [], f = $c, g = Zi(a, b, d), h = g.length;
  for (let a2 = 0; a2 < h; ++a2) {
    let d2 = g[a2];
    if (!f.has(d2)) kj(d2);
    let i = Object.assign({}, c), j = i.delay;
    if (typeof j == "function") i.delay = j(a2, h);
    let k = Object.assign({}, b, {
      transition: i
    });
    e = e.concat(animateTarget(f.get(d2), k, {}));
  }
  return e;
};
export {
  lj
};
