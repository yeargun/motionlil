import "./effect-499.js";
import "./effect-573.js";
let getOriginIndex = function(a, b) {
  if (a == "first") return 0;
  let c = b - 1 | 0;
  return a == "last" ? c : c / 2;
};
export {
  getOriginIndex
};
