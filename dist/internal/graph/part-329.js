import { motionValue } from "./part-14.js";
import { Kd } from "./part-155.js";
import { getValueTransition } from "./part-223.js";
import { animateMotionValue } from "./part-322.js";
import { wh } from "./part-323.js";
import { xh } from "./part-324.js";
import { yh } from "./part-325.js";
import { zh } from "./part-326.js";
import { Bh } from "./part-327.js";
import { Ch } from "./part-328.js";
import { wrap } from "./part-550.js";
import "./effect-499.js";
import "./effect-573.js";
let arc = function(a) {
  let b = ((a2) => {
    let b2 = a2 || {}, c = b2.strength ?? 0.5, d = b2.peak ?? 0.5, e = b2.direction, f = b2.rotate, g = f === true ? 1 : typeof f == "number" ? f : 0, h = null;
    return (a3, b3) => {
      let f2 = b3.x - a3.x, i = b3.y - a3.y, j = Math.abs(f2) >= Math.abs(i) ? f2 : i, k = e === "cw" || e !== "ccw" && j < 0 ? -c : c, l = yh(a3, b3, k, d);
      if (e === void 0) {
        let c2 = Math.abs(f2) < Math.abs(i) ? zh(l.x - (a3.x + f2 * d)) : zh(l.y - (a3.y + i * d)), e2 = h;
        if (e2 != null && c2 != 0 && c2 != e2) l = yh(a3, b3, -k, d);
        else if (c2 != 0) h = c2;
      }
      let m = g != 0 ? xh(0, a3, l, b3) : 0, n = g != 0 ? wrap(-180, 180, xh(1, a3, l, b3) - m) : 0;
      return (c2) => {
        let d2 = {
          x: wh(c2, a3.x, l.x, b3.x),
          y: wh(c2, a3.y, l.y, b3.y)
        };
        if (g != 0) d2.rotate = wrap(-180, 180, xh(c2, a3, l, b3) - (m + n * c2)) * g;
        return d2;
      };
    };
  })(a);
  return {
    interpolateProjection: (a2) => {
      let c = a2.x.translate, d = a2.y.translate;
      if (Math.sqrt(c * c + d * d) < 20) return;
      return b({
        x: c,
        y: d
      }, {
        x: 0,
        y: 0
      });
    },
    animateVisualElement: (a2, c, d, e, f) => {
      let y, A, B, C;
      if (!("x" in c || "y" in c)) return;
      let g = a2.latestValues, h = g.x, i = g.y, x = a2, j = Kd((y = h ?? 0, x), "x", y, true), z = a2, k = Kd((A = i ?? 0, z), "y", A, true), l = c.x, m = c.y, n = Bh(l, j), o = Bh(m, k), p = Ch(l, n), q = Ch(m, o), r = b({
        x: n,
        y: o
      }, {
        x: p,
        y: q
      }), s = r(0).rotate === void 0 ? void 0 : (B = a2, Kd(B, "pathRotation", 0, true)), t = Object.assign({
        delay: e
      }, getValueTransition(d || {}, "x"));
      delete t.path;
      let u = motionValue(0), v = () => {
        if (s) s.set(0);
      };
      (C = animateMotionValue("", u, [0, 1e3], Object.assign(t, {
        isSync: true,
        velocity: 0,
        onUpdate: (a3) => {
          let b2 = r(a3 / 1e3);
          if (j) j.set(b2.x);
          if (k) k.set(b2.y);
          if (s && b2.rotate !== void 0) s.set(b2.rotate);
        },
        onComplete: () => {
          if (j) j.set(p);
          if (k) k.set(q);
          v();
        },
        onStop: v,
        onCancel: v
      }), void 0, false), u).start(C);
      let w = u.animation;
      if (w) f.push(w);
      delete c.x;
      delete c.y;
    }
  };
};
export {
  arc
};
