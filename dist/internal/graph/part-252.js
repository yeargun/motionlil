import "./effect-499.js";
import "./effect-573.js";
let og = {
  getComputedStyle: function(a, b) {
    let c = window.getComputedStyle(a);
    return b.startsWith("--") ? c.getPropertyValue(b) : c[b];
  }
}.getComputedStyle;
export {
  og
};
