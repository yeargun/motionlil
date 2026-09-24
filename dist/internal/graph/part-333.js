import { isMotionValue } from "./part-126.js";
import "./effect-499.js";
import "./effect-573.js";
let isWillChangeMotionValue = function(a = null) {
  return isMotionValue(a) && !!a.add;
};
export {
  isWillChangeMotionValue
};
