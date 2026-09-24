import { removePointDelta } from "./part-307.js";
import { va } from "./part-456.js";
import { mixNumber } from "./part-47.js";
import "./effect-499.js";
import "./effect-573.js";
let removeAxisDelta = function(a, b = 0, c = null, d = null, e = null, f = null, g = null) {
  let h = f ?? a, i = g ?? a;
  if (b === void 0) b = 0;
  if (va.test(b)) b = mixNumber(i.min, i.max, parseFloat(b) / 100) - i.min;
  if (typeof b != "number") return;
  let j = b, k = mixNumber(h.min, h.max, d ?? 0.5);
  if (a === h) k = k - j;
  a.min = removePointDelta(a.min, j, c ?? 1, k, e);
  a.max = removePointDelta(a.max, j, c ?? 1, k, e);
};
export {
  removeAxisDelta
};
