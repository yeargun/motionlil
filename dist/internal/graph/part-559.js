import { oa } from "./part-453.js";
import { mixNumber } from "./part-47.js";
import "./effect-499.js";
import "./effect-573.js";
let Mh = {
  correct: (a, b) => {
    let c = oa.parse(a), d = oa.createTransformer;
    if (c.length > 5 || !d) return a;
    let e = d(a), f = typeof c[0] != "number" ? 1 : 0, g = b.projectionDelta, h = b.treeScale, i = g.x.scale * h.x, j = g.y.scale * h.y, k = mixNumber(i, j, 0.5);
    for (let a2 = f; a2 < c.length && a2 < (f + 4 | 0); a2 = a2 + 1 | 0) {
      let b2 = c[a2];
      if (a2 < (f + 2 | 0) || typeof b2 == "number") {
        let d2 = k;
        if (a2 == f) d2 = i;
        else if (a2 == (f + 1 | 0)) d2 = j;
        c[a2] = b2 / d2;
      }
    }
    return e(c);
  }
};
export {
  Mh
};
