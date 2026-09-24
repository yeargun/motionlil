import { applyPointDelta } from "./part-97.js";
import "./effect-499.js";
import "./effect-573.js";
let applyAxisDelta = function(a, b, c, d, e = null) {
  a.min = applyPointDelta(a.min, b, c, d, e);
  a.max = applyPointDelta(a.max, b, c, d, e);
};
export {
  applyAxisDelta
};
