import { P } from "./part-439.js";
import { Cl } from "./part-6.js";
let S = (a, b, c) => (d) => {
  if (typeof d != "string") return d;
  let e = Cl(d, P), f = {
    __proto__: null
  };
  f[a] = parseFloat(e[0]);
  f[b] = parseFloat(e[1]);
  f[c] = parseFloat(e[2]);
  f.alpha = e.length > 3 ? parseFloat(e[3]) : 1;
  return f;
};
export {
  S
};
