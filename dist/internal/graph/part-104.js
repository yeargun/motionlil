import { translateAxis } from "./part-100.js";
import { transformBox } from "./part-103.js";
import { hasTransform } from "./part-95.js";
import { applyBoxDelta } from "./part-99.js";
import "./effect-499.js";
import "./effect-573.js";
let applyTreeDeltas = function(a, b, c, d = false) {
  let e = c.length;
  if (e == 0) return;
  b.x = 1;
  b.y = 1;
  for (let f = 0; f < e; ++f) {
    let e2 = c[f], g = e2.options, h = g.visualElement;
    if (h) {
      let a2 = h.props.style;
      if (a2 && a2.display === "contents") continue;
    }
    let i = e2.scroll;
    if (d && g.layoutScroll && i && e2 !== e2.root) {
      let b2 = i.offset;
      translateAxis(a.x, -b2.x);
      translateAxis(a.y, -b2.y);
    }
    let j = e2.projectionDelta;
    if (j) {
      let c2 = j;
      b.x = b.x * c2.x.scale;
      b.y = b.y * c2.y.scale;
      applyBoxDelta(a, c2);
    }
    let k = e2.latestValues;
    if (d && hasTransform(k)) {
      let b2 = e2.layout;
      transformBox(a, k, b2 && b2.layoutBox);
    }
  }
  if (b.x < 1.0000000000001 && b.x > 0.999999999999) b.x = 1;
  if (b.y < 1.0000000000001 && b.y > 0.999999999999) b.y = 1;
};
export {
  applyTreeDeltas
};
