import { parseValueFromTransform } from "./part-168.js";
import "./effect-499.js";
import "./effect-573.js";
let readTransformValue = function(a, b) {
  let c = window.getComputedStyle(a).transform;
  return parseValueFromTransform(c === void 0 ? "none" : c, b);
};
export {
  readTransformValue
};
