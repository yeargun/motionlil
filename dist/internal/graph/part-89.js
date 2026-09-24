import "./effect-499.js";
import "./effect-573.js";
let convertBoxToBoundingBox = function(a) {
  let b = a.y.min, c = a.x.max;
  return {
    top: b,
    right: c,
    bottom: a.y.max,
    left: a.x.min
  };
};
export {
  convertBoxToBoundingBox
};
