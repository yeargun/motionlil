import { vh } from "./part-554.js";
import "./effect-499.js";
import "./effect-573.js";
let isTransitionDefined = function(a) {
  for (let b in a) if (!vh.includes(b)) return true;
  return false;
};
export {
  isTransitionDefined
};
