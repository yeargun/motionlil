import { hg } from "./part-530.js";
import "./effect-499.js";
import "./effect-573.js";
let isElementTextInput = function(a) {
  return hg.has(a.tagName) || a.isContentEditable === true;
};
export {
  isElementTextInput
};
