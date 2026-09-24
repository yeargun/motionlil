import { im } from "./part-12.js";
import { isMotionValue } from "./part-126.js";
import { jm } from "./part-13.js";
import { r } from "./part-22.js";
import { Zi } from "./part-387.js";
import { $i } from "./part-388.js";
import { aj } from "./part-389.js";
import { cj } from "./part-390.js";
import { dj } from "./part-391.js";
import { ej } from "./part-392.js";
import { fj } from "./part-393.js";
import { reverseEasing } from "./part-467.js";
import { progress } from "./part-470.js";
import { getEasingForSegment } from "./part-568.js";
import { fillOffset } from "./part-63.js";
import { defaultOffset } from "./part-64.js";
let gj = (a, b, c, d) => {
  let e = Object.assign({}, b), f = e.defaultTransition;
  r(e, "defaultTransition");
  let g = f ?? {}, h = g.duration, i = h ? h : 0.3, j = g.ease || "easeOut", k = /* @__PURE__ */ new Map(), t = {}, m = /* @__PURE__ */ new Map(), n = 0, o = 0, p = 0, q = (a2) => {
    let b2 = k.get(a2) ?? null;
    if (b2) return b2;
    let c2 = {
      __proto__: null
    };
    k.set(a2, c2);
    return c2;
  };
  for (let b2 = 0; b2 < a.length; ++b2) {
    let d2 = a[b2];
    if (typeof d2 == "string") {
      m.set(d2, o);
      continue;
    }
    if (!Array.isArray(d2)) {
      m.set(d2.name, aj(o, d2.at, n, m));
      continue;
    }
    let f2 = d2[0], g2 = d2[1], k2 = d2[2] ?? {}, l = k2.at;
    if (l != null) o = aj(o, l, n, m);
    let r2 = 0, s2 = (a2, b3, c2, d3, e2) => {
      let f3 = ej(a2), h2 = b3.delay, k3 = (typeof h2 == "function" ? h2(d3, e2) : h2) ?? 0, l2 = b3.times ?? defaultOffset(f3), m2 = b3.repeat ?? 0, n2 = b3.repeatType, q2 = b3.repeatDelay ?? 0, s3 = b3.ease ?? j, t2 = b3.duration ?? i, u = o + k3;
      if (l2.length == 1 && l2[0] == 0) l2.push(1);
      let v = l2.length - f3.length;
      if (v > 0) fillOffset(l2, v);
      if (f3.length == 1) f3 = [null, ...f3];
      if (m2 != 0 && m2 < 20) {
        let a3 = t2 > 0 ? q2 / t2 : 0;
        t2 = t2 * (m2 + 1) + q2 * m2;
        let b4 = [...f3], c3 = [...l2], d4 = Array.isArray(s3) ? [...s3] : [s3], e3 = [...d4], g3 = n2 === "reverse" || n2 === "mirror", h3 = b4, i2 = e3;
        if (g3) {
          h3 = [...b4].reverse();
          if (n2 === "reverse") i2 = [...e3].reverse().map((a4) => {
            if (typeof a4 == "function") return reverseEasing(a4);
            return a4;
          });
        }
        for (let j2 = 0; j2 < m2; j2 = j2 + 1 | 0) {
          let k4 = g3 && (j2 % 2 | 0) == 0, m3 = k4 ? h3 : b4, n3 = k4 ? i2 : e3, o2 = (j2 + 1 | 0) * (1 + a3);
          if (a3 > 0) {
            f3.push(f3[f3.length - 1]);
            l2.push(o2);
            d4.push("linear");
          }
          for (let a4 = 0; a4 < m3.length; ++a4) {
            f3.push(m3[a4]);
            l2.push(c3[a4] + o2);
            d4.push(a4 == 0 ? "linear" : getEasingForSegment(n3, a4 - 1 | 0));
          }
        }
        dj(l2, m2, a3);
        s3 = d4;
      }
      let w = u + t2;
      cj(c2, f3, s3, l2, u, w);
      r2 = Math.max(k3 + t2, r2);
      p = Math.max(w, p);
    };
    if (isMotionValue(f2)) s2(g2, k2, fj("default", q(f2)), 0, 0);
    else {
      let a2 = Zi(f2, g2, c, t), b3 = a2.length;
      for (let c2 = 0; c2 < b3; ++c2) {
        let d3 = q(a2[c2]);
        for (let a3 in g2) s2(g2[a3], Object.assign({}, k2, k2[a3]), fj(a3, d3), c2, b3);
      }
    }
    n = o;
    o = o + r2;
  }
  let s = Object.assign({}, g);
  r(s, "type");
  jm(k, (a2, b2) => {
    let c2 = false, f2 = {}, g2 = {};
    for (let b3 in a2) {
      c2 = true;
      let d2 = fj(b3, a2);
      im(d2, $i);
      let h2 = [], i2 = [], j2 = [];
      for (let a3 = 0; a3 < d2.length; ++a3) {
        let b4 = d2[a3];
        h2.push(b4.value);
        i2.push(progress(0, p, b4.at));
        let c3 = b4.easing;
        j2.push(c3 ? c3 : "easeOut");
      }
      if (i2[0] != 0) {
        i2 = [0, ...i2];
        h2 = [h2[0], ...h2];
        j2 = ["easeInOut", ...j2];
      }
      if (i2[i2.length - 1] != 1) {
        i2.push(1);
        h2.push(null);
      }
      f2[b3] = h2;
      g2[b3] = Object.assign({}, s, {
        duration: p,
        ease: j2,
        times: i2
      }, e);
    }
    if (c2) d(b2, f2, g2);
  });
};
export {
  gj
};
