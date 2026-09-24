import "./effect-499.js";
import "./effect-573.js";
let resolveTransition = function(a, b) {
  if (a && a.inherit && b) {
    let c = {};
    for (let a2 in b) c[a2] = b[a2];
    for (let b2 in a) if (b2 != "inherit") c[b2] = a[b2];
    return c;
  }
  return a;
};
export {
  resolveTransition
};
