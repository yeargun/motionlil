import { hasScale } from "./part-92.js";
import { has2DTranslate } from "./part-94.js";
import "./effect-499.js";
import "./effect-573.js";
let hasTransform = function(a) {
  return hasScale(a) || !!(has2DTranslate(a) || (a.z || (a.rotate || (a.rotateX || (a.rotateY || (a.skewX || a.skewY))))));
};
export {
  hasTransform
};
