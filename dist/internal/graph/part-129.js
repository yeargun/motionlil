import { isAnimationControls } from "./part-127.js";
import { isVariantLabel } from "./part-128.js";
import { ad } from "./part-500.js";
import "./effect-499.js";
import "./effect-573.js";
let isControllingVariants = function(a) {
  let b;
  return isAnimationControls(a.animate) || ad.some((b = (b2) => isVariantLabel(a[b2]), b));
};
export {
  isControllingVariants
};
