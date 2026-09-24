import { clamp } from "./part-431.js";
let T = function(a) {
  return Math.round(clamp(0, 255, a));
};
export {
  T
};
