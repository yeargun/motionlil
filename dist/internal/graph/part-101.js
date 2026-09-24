import { mixNumber } from "./part-47.js";
import { applyAxisDelta } from "./part-98.js";
import "./effect-499.js";
import "./effect-573.js";
let transformAxis = function(a, b = null, c = null, d = null, e = null) {
  applyAxisDelta(a, b ?? 0, c ?? 1, mixNumber(a.min, a.max, e ?? 0.5), d);
};
export {
  transformAxis
};
