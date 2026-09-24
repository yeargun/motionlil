import { calcLength } from "./part-299.js";
import { mixNumber } from "./part-47.js";
import "./effect-499.js";
import "./effect-573.js";
let calcRelativeAxis = function(a, b, c, d = 0) {
  let e = c.min;
  if (d != 0) e = mixNumber(c.min, c.max, d);
  a.min = e + b.min;
  a.max = a.min + calcLength(b);
};
export {
  calcRelativeAxis
};
