import { Ea } from "./part-463.js";
import "./effect-499.js";
import "./effect-573.js";
let mixVisibility = function(a, b) {
  if (Ea.has(a)) return (c) => c <= 0 ? a : b;
  return (c) => c >= 1 ? b : a;
};
export {
  mixVisibility
};
