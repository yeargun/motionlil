import { d } from "./part-17.js";
import { isObject } from "./part-523.js";
import "./effect-499.js";
import "./effect-573.js";
let isHTMLElement = function(a = null) {
  return isObject(a) && d(a, "offsetHeight") && !d(a, "ownerSVGElement");
};
export {
  isHTMLElement
};
