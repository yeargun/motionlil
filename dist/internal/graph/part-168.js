import { defaultTransformValue } from "./part-167.js";
import { $d } from "./part-505.js";
import { _d } from "./part-506.js";
import "./effect-499.js";
import "./effect-573.js";
let parseValueFromTransform = function(a, b) {
  if (a == null || a == "" || a == "none") return defaultTransformValue(b);
  let d = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), e = _d;
  if (!d) {
    d = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    e = $d;
  }
  if (!d) return defaultTransformValue(b);
  let f = e[b], h = d[1].split(",").map((a2) => parseFloat(a2.trim()));
  if (typeof f == "function") return f(h);
  return h[f];
};
export {
  parseValueFromTransform
};
