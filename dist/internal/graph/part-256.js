import { resolveElements } from "./part-231.js";
import { qg } from "./part-255.js";
import { sg } from "./part-533.js";
let rg = (a, b) => {
  if (!tg && typeof ResizeObserver != "undefined") tg = new ResizeObserver((a2) => {
    a2.forEach(qg);
  });
  let c = resolveElements(a);
  c.forEach((a2) => {
    let c2 = sg.get(a2);
    if (!c2) {
      c2 = /* @__PURE__ */ new Set();
      sg.set(a2, c2);
    }
    c2.add(b);
    if (tg) tg.observe(a2);
  });
  return () => {
    c.forEach((a2) => {
      let c2 = sg.get(a2);
      if (c2) c2.delete(b);
      if (!(c2 && c2.size) && tg) tg.unobserve(a2);
    });
  };
};
let tg;
export {
  rg,
  tg
};
