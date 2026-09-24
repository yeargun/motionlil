import "./effect-499.js";
import "./effect-573.js";
let getAsType = function(a, b = null) {
  if (b && typeof a == "number") return b.transform(a);
  return a;
};
export {
  getAsType
};
