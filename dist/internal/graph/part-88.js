import "./effect-499.js";
import "./effect-573.js";
let convertBoundingBoxToBox = function(a) {
  let d = {
    min: a.left,
    max: a.right
  };
  return {
    x: d,
    y: {
      min: a.top,
      max: a.bottom
    }
  };
};
export {
  convertBoundingBoxToBox
};
