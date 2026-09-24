import { isMotionValue } from "./part-126.js";
import { motionValue } from "./part-14.js";
import { attachFollow } from "./part-270.js";
import "./effect-499.js";
import "./effect-573.js";
let followValue = function(a, b = null) {
  let c = motionValue(isMotionValue(a) ? a.get() : a);
  attachFollow(c, a, b);
  return c;
};
export {
  followValue
};
