import { Qd } from "./part-159.js";
import { calcChildStagger } from "./part-319.js";
import { resolveVariant } from "./part-330.js";
import { animateTarget } from "./part-336.js";
import "./effect-499.js";
import "./effect-573.js";
let animateVariant = function(a, b, c) {
  let m, d = c || {}, e = a.presenceContext, f = resolveVariant(a, b, d.type === "exit" && e ? e.custom : void 0), h = (f ? f.transition : void 0) ?? (m = a, m.props.transition || {});
  if (d.transitionOverride) h = d.transitionOverride;
  let i = () => f ? Promise.all(animateTarget(a, f, d)) : Promise.resolve(true), j = a.variantChildren, k = (a2) => {
    if (!(j && j.size)) return Promise.resolve(true);
    let e2 = h.delayChildren ?? 0, f2 = h.staggerChildren, g = h.staggerDirection, i2 = [];
    j.forEach((c2) => {
      let m2;
      Qd(c2, "AnimationStart", b);
      let h2 = a2 || 0, k2 = typeof e2 == "function" ? 0 : e2;
      i2.push(animateVariant(c2, b, Object.assign({}, d, {
        delay: h2 + k2 + calcChildStagger(j, c2, e2, f2 ?? 0, g ?? 1)
      })).then((m2 = (a3) => {
        Qd(c2, "AnimationComplete", b);
        return true;
      }, m2)));
    });
    return Promise.all(i2);
  }, l = h.when;
  if (l) {
    if (l === "beforeChildren") return i().then((a2) => k());
    return k().then((a2) => i());
  }
  return Promise.all([i(), k(d.delay)]);
};
export {
  animateVariant
};
