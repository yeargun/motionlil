import "./effect-499.js";
import "./effect-573.js";
let generateLinearEasing = function(a, b, c = 10) {
  let d = "", e = Math.max(Math.round(b / c), 2);
  for (let b2 = 0; b2 < e; ++b2) d = d + (Math.round(a(b2 / (e - 1)) * 1e4) / 1e4 + ", ");
  return `linear(${d.slice(0, d.length - 2)})`;
};
export {
  generateLinearEasing
};
