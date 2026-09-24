import { applyAxisDelta } from "./part-98.js";
import "./effect-499.js";
import "./effect-573.js";
let applyBoxDelta = function(a, b) {
  applyAxisDelta(a.x, b.x.translate, b.x.scale, b.x.originPoint);
  applyAxisDelta(a.y, b.y.translate, b.y.scale, b.y.originPoint);
};
export {
  applyBoxDelta
};
