import "./effect-499.js";
import "./effect-573.js";
let addDomEvent = function(a, b, c, d) {
  let e = d === void 0 ? {
    passive: true
  } : d;
  a.addEventListener(b, c, e);
  return () => {
    a.removeEventListener(b, c, e);
  };
};
export {
  addDomEvent
};
