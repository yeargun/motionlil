import { a } from "./part-425.js";
import { noop } from "./part-426.js";
import { clamp } from "./part-431.js";
import { progress } from "./part-470.js";
import { getMixer } from "./part-53.js";
import "./effect-499.js";
import "./effect-573.js";
let interpolate = function(b, c, d = null) {
  let e = c, f = true, g = null, h = null;
  if (d) {
    f = d.clamp ?? true;
    g = d.ease;
    h = d.mixer;
  }
  let i = b.length;
  if (i == 1) return (a2) => e[0];
  if (i == 2 && e[0] == e[1]) return (a2) => e[1];
  let j = b[0] == b[1];
  if (b[0] > b[i - 1 | 0]) {
    b = [...b].reverse();
    e = [...e].reverse();
  }
  let k = [], l = h ?? a.mix;
  for (let a2 = 0; a2 < e.length - 1; ++a2) {
    let b2 = e[a2], c2 = e[a2 + 1 | 0], d2 = l != null ? l(b2, c2) : getMixer(b2)(b2, c2);
    if (g != null) {
      let b3 = Array.isArray(g) ? g[a2] ? g[a2] : noop : g, c3 = d2;
      d2 = (a3) => c3(b3(a3));
    }
    k.push(d2);
  }
  let m = k.length, n = (a2) => {
    if (j && a2 < b[0]) return e[0];
    let c2 = 0;
    if (m > 1) while (c2 < b.length - 2 && a2 >= b[c2 + 1 | 0]) c2 = c2 + 1 | 0;
    return k[c2](progress(b[c2], b[c2 + 1 | 0], a2));
  };
  if (f) {
    let a2 = b[0], c2 = b[i - 1 | 0];
    return (b2) => n(clamp(a2, c2, b2));
  }
  return n;
};
export {
  interpolate
};
