import { isMotionValue } from "./part-126.js";
import { motionValue } from "./part-14.js";
import { animateMotionValue } from "./part-322.js";
import "./effect-499.js";
import "./effect-573.js";
let animateSingleValue = function(a, b, c = null) {
  let d = isMotionValue(a) ? a : motionValue(a);
  d.start(animateMotionValue("", d, b, c, void 0, false));
  return d.animation;
};
export {
  animateSingleValue
};
