import "./effect-499.js";
import "./effect-573.js";
let isGenerator = function(a) {
  return typeof a == "function" && "applyToOptions" in a;
};
export {
  isGenerator
};
