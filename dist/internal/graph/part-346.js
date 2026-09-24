import "./effect-499.js";
import "./effect-573.js";
let pixelsToPercent = function(a, b) {
  return b.max == b.min ? 0 : a / (b.max - b.min) * 100;
};
export {
  pixelsToPercent
};
