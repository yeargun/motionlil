import { clamp } from "./part-431.js";
import { secondsToMilliseconds } from "./part-432.js";
import { millisecondsToSeconds } from "./part-433.js";
import { Ia } from "./part-464.js";
import { calcGeneratorDuration } from "./part-55.js";
import { createGeneratorEasing } from "./part-56.js";
import { generateLinearEasing } from "./part-57.js";
import { Ka } from "./part-58.js";
import "./effect-499.js";
import "./effect-573.js";
let spring = function(a, b) {
  let F, e = typeof a != "object" ? {
    visualDuration: a ?? 0.3,
    keyframes: [0, 1],
    bounce: b ?? 0.3
  } : a, f = e.keyframes[0], g = e.keyframes[e.keyframes.length - 1], h = {
    done: false,
    value: f
  }, i = -millisecondsToSeconds(e.velocity || 0), j = e.stiffness ?? 100, k = e.damping ?? 10, l = e.mass ?? 1, m = e.duration, n = false;
  if (e.stiffness == null && e.damping == null && e.mass == null && !(m == null && e.bounce == null)) {
    i = 0;
    l = 1;
    if (e.visualDuration) {
      let b2 = 6.283185307179586 / (e.visualDuration * 1.2);
      j = b2 * b2;
      let c = e.bounce || 0;
      k = 2 * clamp(0.05, 1, 1 - c) * Math.sqrt(j);
    } else {
      let a2 = e.bounce ?? 0.3, b2 = clamp(0.05, 1, 1 - a2), c = clamp(0.01, 10, millisecondsToSeconds(m ?? 800)), d = 5 / c;
      for (let a3 = 1; a3 < 12; ++a3) {
        let a4 = d * b2, e2 = a4 * c, f2 = 0, g2 = 0;
        if (b2 < 1) {
          f2 = 1e-3 - a4 / Ka(d, b2) * Math.exp(-e2);
          g2 = (-f2 + 1e-3 > 0 ? -1 : 1) * (-(b2 * b2 * (d * d) * c) * Math.exp(-e2)) / Ka(d * d, b2);
        } else {
          f2 = -1e-3 + Math.exp(-d * c) * (d * c + 1);
          g2 = Math.exp(-d * c) * (-d * (c * c));
        }
        d = d - f2 / g2;
      }
      m = secondsToMilliseconds(c);
      if (d != d) {
        j = 100;
        k = 10;
      } else {
        j = d * d;
        k = b2 * 2 * Math.sqrt(j);
      }
      n = true;
    }
  }
  let o = k / (2 * Math.sqrt(j * l)), p = g - f, q = millisecondsToSeconds(Math.sqrt(j / l)), r = Math.abs(p) < 5, s = e.restSpeed || (r ? 0.01 : 2), t = e.restDelta || (r ? 5e-3 : 0.5), u = Ka(q, o), v = q * Math.sqrt(o * o - 1), w = (i + o * q * p) / (o < 1 ? u : v), x = o * q * w + p * u, y = o * q * p - w * u, z = o * q * w - p * v, A = o * q * p - w * v, B = i + q * p, D = (a2) => {
    let b2 = Math.exp(-o * q * a2);
    if (o < 1) return b2 * (x * Math.sin(u * a2) + y * Math.cos(u * a2));
    if (o == 1) return Math.exp(-q * a2) * (q * B * a2 - i);
    let c = Math.min(v * a2, 300);
    return b2 * (z * Math.sinh(c) + A * Math.cosh(c));
  }, E = (F = {
    calculatedDuration: n ? m || null : null,
    velocity: (a2) => secondsToMilliseconds(D(a2)),
    next: (a2) => {
      let b2 = 0;
      if (!n && o < 1) {
        let c = Math.exp(-o * q * a2), d = Math.sin(u * a2), e2 = Math.cos(u * a2);
        b2 = g - c * (w * d + p * e2);
        h.done = Math.abs(secondsToMilliseconds(c * (x * d + y * e2))) <= s && Math.abs(g - b2) <= t;
      } else {
        b2 = ((a3) => {
          let b3 = Math.exp(-o * q * a3);
          if (o < 1) return g - b3 * (w * Math.sin(u * a3) + p * Math.cos(u * a3));
          if (o == 1) return g - Math.exp(-q * a3) * (p + B * a3);
          let c2 = Math.min(v * a3, 300);
          return g - b3 * ((i + o * q * p) * Math.sinh(c2) + v * p * Math.cosh(c2)) / v;
        })(a2);
        let c = m;
        h.done = n ? a2 >= c : Math.abs(secondsToMilliseconds(D(a2))) <= s && Math.abs(g - b2) <= t;
      }
      h.value = h.done ? g : b2;
      return h;
    },
    toTransition: () => {
    }
  }, F);
  E.toString = () => {
    let a2 = Math.min(calcGeneratorDuration(E), Ia);
    return a2 + "ms " + generateLinearEasing((b2) => E.next(a2 * b2).value, a2, 30);
  };
  return E;
};
spring.applyToOptions = function(a) {
  let b = createGeneratorEasing(a, 100, spring);
  a.ease = b.ease;
  a.duration = secondsToMilliseconds(b.duration);
  a.type = "keyframes";
  return a;
};
export {
  spring
};
