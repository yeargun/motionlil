import "./effect-499.js";
import "./effect-573.js";
let mirrorEasing = (a) => (b) => b <= 0.5 ? a(2 * b) / 2 : (2 - a(2 * (1 - b))) / 2;
export {
  mirrorEasing
};
