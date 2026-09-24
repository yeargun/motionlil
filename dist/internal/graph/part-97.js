import { scalePoint } from "./part-96.js";
import "./effect-499.js";
import "./effect-573.js";
let applyPointDelta = function(a, b, c, d, e = null) {
  if (e != null) a = scalePoint(a, e, d);
  return scalePoint(a, c, d) + b;
};
export {
  applyPointDelta
};
