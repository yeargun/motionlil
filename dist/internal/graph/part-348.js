import { Bb } from "./part-477.js";
import { Nh } from "./part-560.js";
import "./effect-499.js";
import "./effect-573.js";
let isForcedMotionValue = function(a, b) {
  return Bb.has(a) || a.startsWith("origin") || (!!b.layout || b.layoutId !== void 0) && (!!Nh[a] || a == "opacity");
};
export {
  isForcedMotionValue
};
