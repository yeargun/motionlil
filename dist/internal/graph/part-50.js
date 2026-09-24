import { V } from "./part-442.js";
import { mixImmediate } from "./part-46.js";
import { mixNumber } from "./part-47.js";
import { mixLinearColor } from "./part-48.js";
import { Ca } from "./part-49.js";
import "./effect-499.js";
import "./effect-573.js";
let mixColor = function(a, b) {
  let c = Ca(a), d = Ca(b);
  if (!c || !d) return mixImmediate(a, b);
  let h = Object.assign({
    __proto__: null
  }, c);
  return (a2) => {
    h.red = mixLinearColor(c.red, d.red, a2);
    h.green = mixLinearColor(c.green, d.green, a2);
    h.blue = mixLinearColor(c.blue, d.blue, a2);
    h.alpha = mixNumber(c.alpha ?? 1, d.alpha ?? 1, a2);
    return V.transform(h);
  };
};
export {
  mixColor
};
