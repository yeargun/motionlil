import { resolveElements } from "./part-231.js";
import { ck } from "./part-593.js";
import "./effect-499.js";
import "./effect-573.js";
let inView = function(a, b, c) {
  let d = c || {}, e = d.amount;
  if (e === void 0) e = "some";
  let f = resolveElements(a), g = /* @__PURE__ */ new WeakMap(), i;
  i = new IntersectionObserver((a2) => {
    a2.forEach((a3) => {
      let c2 = a3.target, d2 = g.get(c2), e2 = a3.isIntersecting;
      if (e2 == !!d2) return;
      if (e2) {
        let d3 = b(c2, a3);
        if (typeof d3 == "function") g.set(c2, d3);
        else i.unobserve(c2);
      } else if (typeof d2 == "function") {
        d2(a3);
        g.delete(c2);
      }
    });
  }, {
    root: d.root,
    rootMargin: d.margin,
    threshold: typeof e == "number" ? e : ck[e]
  });
  f.forEach((a2) => {
    i.observe(a2);
  });
  return () => {
    i.disconnect();
  };
};
export {
  inView
};
