import { interpolate } from "./part-261.js";
import "./effect-499.js";
import "./effect-573.js";
let transform = function(a, b, c = null, d = null) {
  let e = !Array.isArray(a), f = e ? interpolate(b, c, d) : interpolate(a, b, c);
  return e ? f(a) : f;
};
export {
  transform
};
