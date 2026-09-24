import { scalePoint } from "./part-96.js";
import "./effect-499.js";
import "./effect-573.js";
let removePointDelta = function(a, b, c, d, e = null) {
  a = scalePoint(a - b, 1 / c, d);
  if (e != null) a = scalePoint(a, 1 / e, d);
  return a;
};
export {
  removePointDelta
};
