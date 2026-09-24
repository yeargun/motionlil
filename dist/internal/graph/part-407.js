import { Cg } from "./part-260.js";
import { interpolate } from "./part-261.js";
import { vj } from "./part-404.js";
import { zj } from "./part-406.js";
import { clamp } from "./part-431.js";
import { Ej } from "./part-583.js";
import { Gj } from "./part-584.js";
import { defaultOffset } from "./part-64.js";
let Fj = (a, b, c) => {
  let d = c.offset;
  if (d === void 0) d = Ej;
  let e = c.target, f = e === void 0 ? a : e, g = c.axis !== "x", h = f !== a ? vj(f, a) : Gj, i = f === a ? g ? a.scrollHeight : a.scrollWidth : "getBBox" in f && f.tagName != "svg" ? f.getBBox()[g ? "height" : "width"] : g ? f.clientHeight : f.clientWidth, j = g ? a.clientHeight : a.clientWidth, k = g ? b.y : b.x;
  k.offset.length = 0;
  let m = !k.interpolate, n = d.length;
  for (let a2 = 0; a2 < n; ++a2) {
    let b2 = zj(d[a2], j, i, g ? h.y : h.x);
    if (!m && b2 !== k.interpolatorOffsets[a2]) m = true;
    k.offset.push(b2);
  }
  if (m) {
    let a2, b2, c2;
    k.interpolate = interpolate((a2 = k.offset, b2 = defaultOffset(k.offset), c2 = {
      clamp: null,
      ease: null,
      mixer: null
    }, Cg(c2, false), a2), b2, c2);
    k.interpolatorOffsets = [...k.offset];
  }
  let o = k.interpolate;
  k.progress = clamp(0, 1, o(k.current));
};
export {
  Fj
};
