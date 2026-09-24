import { spring } from "./part-59.js";
import { Ma } from "./part-60.js";
import "./effect-499.js";
import "./effect-573.js";
let inertia = function(a) {
  let c = a.keyframes[0], d = a.velocity ?? 0, e = a.power ?? 0.8, f = a.timeConstant ?? 325, g = a.restDelta ?? 0.5, h = a.min, i = a.max, j = {
    done: false,
    value: c
  }, k = e * d, l = c + k, m = a.modifyTarget === void 0 ? l : (0, a.modifyTarget)(l);
  if (m != l) k = m - c;
  let n = (a2) => -k * Math.exp(-a2 / f), o = (a2) => m + n(a2), p = (a2) => {
    let b = n(a2), c2 = m + n(a2);
    j.done = Math.abs(b) <= g;
    j.value = j.done ? m : c2;
  }, q = null, r = null, s = (b) => {
    let c2 = j.value;
    if (h != null && c2 < h || i != null && c2 > i) {
      q = b;
      r = spring({
        keyframes: [c2, h == null ? i : i == null || Math.abs(h - c2) < Math.abs(i - c2) ? h : i],
        velocity: Ma(o, b, c2),
        damping: a.bounceDamping ?? 10,
        stiffness: a.bounceStiffness ?? 500,
        restDelta: g,
        restSpeed: a.restSpeed
      });
    }
  };
  s(0);
  return {
    calculatedDuration: null,
    next: (a2) => {
      let b = false;
      if (!r && q == null) {
        b = true;
        p(a2);
        s(a2);
      }
      let c2 = q, d2 = r;
      if (c2 != null && d2 && a2 >= c2) return d2.next(a2 - c2);
      if (!b) p(a2);
      return j;
    }
  };
};
export {
  inertia
};
