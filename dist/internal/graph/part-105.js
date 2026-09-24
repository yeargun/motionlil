import { convertBoundingBoxToBox } from "./part-88.js";
import { transformBoxPoints } from "./part-90.js";
import "./effect-499.js";
import "./effect-573.js";
let measureViewportBox = function(a, b) {
  return convertBoundingBoxToBox(transformBoxPoints(a.getBoundingClientRect(), b));
};
export {
  measureViewportBox
};
