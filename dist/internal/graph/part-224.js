import { Lf } from "./part-520.js";
import "./effect-499.js";
import "./effect-573.js";
let applyPxDefaults = function(a, b) {
  for (let c = 0; c < a.length; ++c) {
    let d = a[c];
    if (typeof d == "number" && Lf.has(b)) a[c] = d + "px";
  }
};
export {
  applyPxDefaults
};
