import { Xl } from "./part-10.js";
import { Nf } from "./part-228.js";
import { Rf } from "./part-232.js";
import { Wl } from "./part-9.js";
let Tf = (a) => {
  let b = /* @__PURE__ */ new WeakMap();
  return (c, d) => {
    let h, e = Wl(b, c) ?? (h = {
      latest: null,
      values: /* @__PURE__ */ new Map()
    }, Nf(h), h);
    Xl(b, c, e);
    let f = [];
    for (let b2 in d) {
      let g = d[b2] ?? null;
      if (g) f.push(a(c, e, b2, g));
    }
    return Rf(f);
  };
};
export {
  Tf
};
