import { gg } from "./part-529.js";
import "./effect-499.js";
import "./effect-573.js";
let isElementKeyboardAccessible = function(a) {
  return gg.has(a.tagName) || a.isContentEditable === true;
};
export {
  isElementKeyboardAccessible
};
