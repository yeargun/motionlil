import { isCSSVariableName } from "./part-25.js";
import { Nh } from "./part-560.js";
import "./effect-499.js";
import "./effect-573.js";
let addScaleCorrector = function(a) {
  for (let b in a) {
    Nh[b] = a[b];
    if (isCSSVariableName(b)) Nh[b].isCSSVariable = true;
  }
};
export {
  addScaleCorrector
};
