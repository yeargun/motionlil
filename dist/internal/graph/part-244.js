import "./effect-499.js";
import "./effect-573.js";
let isPrimaryPointer = function(a) {
  if (a.pointerType === "mouse") {
    let b = a.button;
    return typeof b != "number" || b <= 0;
  }
  return a.isPrimary !== false;
};
export {
  isPrimaryPointer
};
