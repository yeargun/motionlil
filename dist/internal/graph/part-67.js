import "./effect-499.js";
import "./effect-573.js";
let getFinalKeyframe = function(a, b, c, d = 1) {
  let e = a.filter((a2) => a2 !== null), g = b.repeatType, i = d < 0 || b.repeat && g !== void 0 && g !== "loop" && b.repeat % 2 === 1 ? 0 : e.length - 1;
  return i == 0 || c === void 0 ? e[i] : c;
};
export {
  getFinalKeyframe
};
