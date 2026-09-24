import { calcAxisDelta } from "./part-301.js";
import "./effect-499.js";
import "./effect-573.js";
let calcBoxDelta = function(a, b, c, d = null) {
  let e = 0.5, f = 0.5;
  if (d) {
    let a2 = d.originX ?? null, b2 = d.originY ?? null;
    if (a2 != null) {
      if (typeof a2 == "number") e = a2;
    }
    if (b2 != null) {
      if (typeof b2 == "number") f = b2;
    }
  }
  calcAxisDelta(a.x, b.x, c.x, e);
  calcAxisDelta(a.y, b.y, c.y, f);
};
export {
  calcBoxDelta
};
