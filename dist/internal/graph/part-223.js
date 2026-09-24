import { resolveTransition } from "./part-222.js";
import "./effect-499.js";
import "./effect-573.js";
let getValueTransition = function(a, b) {
  if (!a) return a;
  let c = a[b], d = a.default, e = c ?? d ?? a;
  return e !== a ? resolveTransition(e, a) : e;
};
export {
  getValueTransition
};
