import { isControllingVariants } from "./part-129.js";
import "./effect-499.js";
import "./effect-573.js";
let isVariantNode = function(a) {
  return isControllingVariants(a) || !!a.variants;
};
export {
  isVariantNode
};
