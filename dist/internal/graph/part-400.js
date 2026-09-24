import { fillWildcards } from "./part-162.js";
import { Oe, Re } from "./part-202.js";
import { animationMapKey } from "./part-220.js";
import { getAnimationMap } from "./part-221.js";
import { getValueTransition } from "./part-223.js";
import { applyPxDefaults } from "./part-224.js";
import { resolveElements } from "./part-231.js";
import { og } from "./part-252.js";
import { ej } from "./part-392.js";
import { secondsToMilliseconds } from "./part-432.js";
let nj = (a, b, c, d) => {
  let e = [];
  if (a == null) return e;
  let f = resolveElements(a, d), g = f.length, h = [];
  for (let a2 = 0; a2 < g; ++a2) {
    let d2 = f[a2], e2 = Object.assign({}, c), i = e2.delay;
    if (typeof i == "function") e2.delay = i(a2, g);
    for (let a3 in b) {
      let c2 = Object.assign({}, getValueTransition(e2, a3), {
        element: d2,
        name: a3,
        allowFlatten: !e2.type && !e2.ease
      }), f2 = c2.duration;
      if (f2) c2.duration = secondsToMilliseconds(f2);
      let g2 = c2.delay;
      if (g2) c2.delay = secondsToMilliseconds(g2);
      let i2 = c2.pseudoElement, j = getAnimationMap(d2), k = animationMapKey(a3, i2 ? i2 : ""), l = j.get(k) ?? null;
      if (l != null) l.stop();
      h.push([j, k, ej(b[a3]), c2, d2, a3, i2]);
    }
  }
  for (let a2 = 0; a2 < h.length; ++a2) {
    let b2 = h[a2], c2 = b2[2], d2 = !b2[6];
    if (d2 && c2[0] === null) c2[0] = og(b2[4], b2[5]);
    fillWildcards(c2);
    applyPxDefaults(c2, b2[5]);
    if (d2 && c2.length < 2) c2.unshift(og(b2[4], b2[5]));
    b2[3].keyframes = c2;
  }
  for (let a2 = 0; a2 < h.length; ++a2) {
    let b2 = h[a2], d2 = b2[3], f2 = {};
    Re(f2, d2, Oe);
    b2[0].set(b2[1], f2);
    f2._finished.finally(() => {
      b2[0].delete(b2[1]);
    });
    e.push(f2);
  }
  return e;
};
export {
  nj
};
