import "./effect-499.js";
import "./effect-573.js";
let calcChildStagger = function(a, b, c, d = 0, e = 1) {
  let g = Array.from(a).sort((a2, b2) => a2.sortNodePosition(b2)).indexOf(b), h = a.size;
  if (typeof c == "function") return c(g, h);
  return e == 1 ? g * d : (h - 1) * d - g * d;
};
export {
  calcChildStagger
};
