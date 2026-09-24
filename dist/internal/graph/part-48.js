import "./effect-499.js";
import "./effect-573.js";
let mixLinearColor = function(a, b, c) {
  let d = a * a, e = c * (b * b - d) + d;
  return e < 0 ? 0 : Math.sqrt(e);
};
export {
  mixLinearColor
};
