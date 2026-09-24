import { calcLength } from "./part-299.js";
import { mixNumber } from "./part-47.js";
import { kh } from "./part-544.js";
import { lh } from "./part-545.js";
import { nh } from "./part-546.js";
import { oh } from "./part-547.js";
import "./effect-499.js";
import "./effect-573.js";
let calcAxisDelta = function(a, b, c, d = 0.5) {
  a.origin = d;
  a.originPoint = mixNumber(b.min, b.max, a.origin);
  a.scale = calcLength(c) / calcLength(b);
  a.translate = mixNumber(c.min, c.max, a.origin) - a.originPoint;
  if (a.scale >= kh && a.scale <= lh || a.scale != a.scale) a.scale = 1;
  if (a.translate >= nh && a.translate <= oh || a.translate != a.translate) a.translate = 0;
};
export {
  calcAxisDelta
};
