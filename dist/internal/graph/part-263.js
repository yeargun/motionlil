import { mixNumber } from "./part-47.js";
import { getMixer } from "./part-53.js";
import "./effect-499.js";
import "./effect-573.js";
let mix = function(a, b, c = null) {
  let d = c;
  if (typeof a == "number" && typeof b == "number" && typeof d == "number") return mixNumber(a, b, d);
  return getMixer(a)(a, b);
};
export {
  mix
};
