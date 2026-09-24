import { si } from "./part-357.js";
import "./effect-499.js";
import "./effect-573.js";
let checkVariantsDidChange = function(a, b) {
  if (typeof b == "string") return b != a;
  if (Array.isArray(b)) {
    if (Array.isArray(a)) return !si(b, a);
    return true;
  }
  return false;
};
export {
  checkVariantsDidChange
};
