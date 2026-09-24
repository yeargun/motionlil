import { u } from "./part-23.js";
import { Ci } from "./part-371.js";
import { a } from "./part-425.js";
import { mirrorEasing } from "./part-466.js";
import { reverseEasing } from "./part-467.js";
import { Xi } from "./part-575.js";
import { Na } from "./part-62.js";
import "./effect-499.js";
import "./effect-573.js";
let noop = (a2) => a2;
let v = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
let createRenderBatcher = (b, c) => {
  let d = false, e = true, m = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  }, g = () => {
    d = true;
  }, h = [], i = () => {
    let f = a.useManualTiming === true, g2 = f ? m.timestamp : performance.now();
    d = false;
    if (!f) m.delta = e ? 1e3 / 60 : Math.max(Math.min(g2 - m.timestamp, 40), 1);
    m.timestamp = g2;
    m.isProcessing = true;
    h.forEach((a2) => a2.process(m));
    m.isProcessing = false;
    if (d && c) {
      e = false;
      b(i);
    }
  }, j = {}, k = {};
  v.forEach((a2) => {
    let c2 = u(g);
    h.push(c2);
    k[a2] = c2;
    j[a2] = (a3, f, g2) => {
      if (!d) {
        d = true;
        e = true;
        if (!m.isProcessing) b(i);
      }
      return c2.schedule(a3, f, g2);
    };
  });
  return {
    schedule: j,
    cancel: (a2) => {
      h.forEach((b2) => b2.cancel(a2));
    },
    state: m,
    steps: k
  };
};
let x = createRenderBatcher(typeof requestAnimationFrame != "undefined" ? requestAnimationFrame : noop, true);
let z = x.cancel;
let cubicBezier = (a2, b, c, d) => {
  if (a2 == b && c == d) return noop;
  return (e) => {
    if (e == 0 || e == 1) return e;
    let f = 0, g = 1, h = 0, i = 0;
    while (true) {
      h = f + (g - f) / 2;
      let b2 = Na(h, a2, c) - e;
      if (b2 > 0) g = h;
      else f = h;
      ++i;
      if (Math.abs(b2) <= 1e-7 || i >= 12) break;
    }
    return Na(h, b, d);
  };
};
let Oa = cubicBezier(0.33, 1.53, 0.69, 0.99);
let Pa = reverseEasing(Oa);
let Qa = mirrorEasing(Pa);
let anticipate = (a2) => {
  if (a2 >= 1) return 1;
  a2 = a2 * 2;
  return a2 < 1 ? 0.5 * Pa(a2) : 0.5 * (2 - Math.exp(-10 * (a2 - 1) * Math.log(2)));
};
let circIn = (a2) => 1 - Math.sin(Math.acos(a2));
let Ra = reverseEasing(circIn);
let Sa = mirrorEasing(circIn);
let Ta = cubicBezier(0.42, 0, 1, 1);
let Ua = cubicBezier(0, 0, 0.58, 1);
let Va = cubicBezier(0.42, 0, 0.58, 1);
let Wa = {
  __proto__: null,
  linear: noop,
  easeIn: Ta,
  easeInOut: Va,
  easeOut: Ua,
  circIn,
  circInOut: Sa,
  circOut: Ra,
  backIn: Pa,
  backInOut: Qa,
  backOut: Oa,
  anticipate
};
let Kb = createRenderBatcher(queueMicrotask, false);
let Di = Ci(0, 0.5, Ra);
let Ei = Ci(0.5, 0.95, noop);
v.forEach((a2) => {
  Xi[a2] = (a3) => z(a3);
});
export {
  Di,
  Ei,
  Kb,
  Oa,
  Pa,
  Qa,
  Ra,
  Sa,
  Ta,
  Ua,
  Va,
  Wa,
  anticipate,
  circIn,
  createRenderBatcher,
  cubicBezier,
  noop,
  v,
  x,
  z
};
