import { transformAxis } from "./part-101.js";
import { Vb } from "./part-102.js";
import "./effect-499.js";
import "./effect-573.js";
let transformBox = function(a, b, c = null) {
  let d = c ?? a;
  transformAxis(a.x, Vb(b.x, d.x), b.scaleX, b.scale, b.originX);
  transformAxis(a.y, Vb(b.y, d.y), b.scaleY, b.scale, b.originY);
};
export {
  transformBox
};
