import "./effect-499.js";
import "./effect-573.js";
let moveItem = function(a, b, c) {
  let d = [...a], e = d.length, f = b < 0 ? e + b | 0 : b;
  if (f >= 0 && f < e) d.splice(c < 0 ? e + c | 0 : c, 0, d.splice(b, 1)[0]);
  return d;
};
export {
  moveItem
};
