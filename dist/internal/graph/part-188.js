import "./effect-499.js";
import "./effect-573.js";
let memo = function(a) {
  let b = null;
  return () => {
    if (b == null) b = a();
    return b;
  };
};
export {
  memo
};
