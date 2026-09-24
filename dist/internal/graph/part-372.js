import { yi } from "./part-368.js";
import { zi } from "./part-369.js";
import { Ai } from "./part-370.js";
import { Di, Ei } from "./part-426.js";
import { va } from "./part-456.js";
import { mixNumber } from "./part-47.js";
import { Hg } from "./part-538.js";
import "./effect-499.js";
import "./effect-573.js";
let mixValues = function(a, b, c, d, e, f) {
  if (e) {
    a.opacity = mixNumber(0, c.opacity ?? 1, Di(d));
    a.opacityExit = mixNumber(b.opacity ?? 1, 0, Ei(d));
  } else if (f) a.opacity = mixNumber(b.opacity ?? 1, c.opacity ?? 1, d);
  {
    let e2 = Hg, f2 = 0;
    for (; f2 < e2.length; ++f2) {
      let g2 = e2[f2] ?? "";
      {
        let e3 = Ai(b, g2), f3 = Ai(c, g2);
        if (e3 === void 0 && f3 === void 0) continue;
        e3 = e3 || 0;
        f3 = f3 || 0;
        if (e3 === 0 || f3 === 0 || zi(e3) == zi(f3)) {
          let b2 = Math.max(mixNumber(yi(e3), yi(f3), d), 0);
          a[g2] = va.test(f3) || va.test(e3) ? `${b2}%` : b2;
        } else a[g2] = f3;
      }
    }
  }
  let g = b.rotate, h = c.rotate;
  if (g || h) a.rotate = mixNumber(g || 0, h || 0, d);
};
export {
  mixValues
};
