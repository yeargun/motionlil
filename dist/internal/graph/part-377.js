import { isMotionValue } from "./part-126.js";
import "./effect-499.js";
import "./effect-573.js";
let resolveMotionValue = function(a = null) {
  return isMotionValue(a) ? a.get() : a;
};
export {
  resolveMotionValue
};
