import { buildHTMLStyles } from "./part-344.js";
import { buildSVGPath } from "./part-351.js";
import { fi } from "./part-352.js";
import { gi } from "./part-563.js";
import "./effect-499.js";
import "./effect-573.js";
let buildSVGAttrs = function(a, b, c, d, e) {
  let f = {};
  for (let a2 in b) if (a2 != "attrX" && a2 != "attrY" && a2 != "attrScale" && a2 != "pathLength" && a2 != "pathSpacing" && a2 != "pathOffset") f[a2] = b[a2];
  buildHTMLStyles(a, f, d);
  if (c) {
    if (a.style.viewBox) a.attrs.viewBox = a.style.viewBox;
    return;
  }
  let g = a.style, h = {};
  a.attrs = g;
  a.style = h;
  {
    let a2 = gi, b2 = 0;
    for (; b2 < a2.length; ++b2) {
      let c2 = a2[b2] ?? "";
      if (g[c2] !== void 0) {
        h[c2] = g[c2];
        delete g[c2];
      }
    }
  }
  if (h.transform || g.transformOrigin) {
    h.transformOrigin = g.transformOrigin ?? "50% 50%";
    delete g.transformOrigin;
  }
  if (h.transform) {
    h.transformBox = (e && e.transformBox) ?? "fill-box";
    delete g.transformBox;
  }
  let i = b.attrX, j = b.attrY, k = b.attrScale, l = b.pathLength;
  if (i !== void 0) g.x = i;
  if (j !== void 0) g.y = j;
  if (k !== void 0) g.scale = k;
  if (l !== void 0) buildSVGPath(g, l, fi(b.pathSpacing, 1), fi(b.pathOffset, 0), false);
};
export {
  buildSVGAttrs
};
