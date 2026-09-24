import "./effect-499.js";
import "./effect-573.js";
let isNodeOrChild = function(a, b) {
  if (!b) return false;
  if (a === b) return true;
  return isNodeOrChild(a, b.parentElement);
};
export {
  isNodeOrChild
};
