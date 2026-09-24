import { Qj } from "./part-411.js";
import { Vj } from "./part-415.js";
import { Yj } from "./part-416.js";
import { $j } from "./part-592.js";
let Zj = (a) => {
  let b = a.source || a.container, c = a.axis, d = a.target, e = a.offset, f = $j.get(b);
  if (!f) {
    f = /* @__PURE__ */ new Map();
    $j.set(b, f);
  }
  let g = f, h = d ?? "self", i = g.get(h);
  if (!i) {
    i = {};
    g.set(h, i);
  }
  let j = c + (e || []).join(",");
  if (!i[j]) {
    let f2 = {
      container: b
    }, g2;
    for (let b2 in a) if (b2 != "source" && b2 != "container") f2[b2] = a[b2];
    if (d && Qj(d)) g2 = Vj(e) ? new ViewTimeline({
      subject: d,
      axis: c
    }) : Yj(f2);
    else if (Qj()) g2 = new ScrollTimeline({
      source: b,
      axis: c
    });
    else g2 = Yj(f2);
    i[j] = g2;
  }
  return i[j];
};
export {
  Zj
};
