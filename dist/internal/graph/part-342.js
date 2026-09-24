import { Ih } from "./part-341.js";
import { Ab } from "./part-477.js";
import { Jh } from "./part-557.js";
import "./effect-499.js";
import "./effect-573.js";
let buildTransform = function(a, b, c) {
  let d = "", e = true;
  {
    let f2 = Ab, g = 0;
    for (; g < f2.length; ++g) {
      let h = f2[g] ?? "";
      {
        let f3 = a[h];
        if (f3 === void 0) continue;
        let i = (typeof f3 == "number" ? f3 : parseFloat(f3)) == (h.startsWith("scale") ? 1 : 0);
        if (!i || c) {
          let a2 = Ih(f3, h);
          if (!i) {
            e = false;
            d = d + `${Jh[h] || h}(${a2}) `;
          }
          if (c) b[h] = a2;
        }
      }
    }
  }
  let f = a.pathRotation;
  if (f) {
    e = false;
    d = d + `rotate(${Ih(f, "pathRotation")}) `;
  }
  d = d.trim();
  if (c) return c(b, e ? "" : d);
  return e ? "none" : d;
};
export {
  buildTransform
};
