import { jc } from "./part-113.js";
import { initPrefersReducedMotion } from "./part-132.js";
import { isSVGTag } from "./part-135.js";
import { rd } from "./part-141.js";
import { sd } from "./part-142.js";
import { Bd } from "./part-148.js";
import { Gd } from "./part-151.js";
import { $c } from "./part-498.js";
import { bd } from "./part-501.js";
import { cd } from "./part-502.js";
let qd = (a, b) => {
  if (a.type === "svg") a.isSVGTag = isSVGTag(b.tagName);
  if (a.hasBeenMounted) {
    let b2 = a.initialValues;
    for (let c in b2) {
      let d2 = a.values.get(c) ?? null;
      if (d2 != null) jc(d2, b2[c], true);
      a.latestValues[c] = b2[c];
    }
  }
  a.current = b;
  $c.set(b, a);
  let d = a.projection;
  if (d && !d.instance) d.mount(b);
  let e = a.parent;
  if (e && a.isVariantNode && !a.isControllingVariants) a.removeFromVariantTree = Gd(e, a);
  a.values.forEach((b2, c) => {
    sd(a, c, b2);
  });
  let g = a.reducedMotionConfig;
  if (g === "never") a.shouldReduceMotion = false;
  else if (g === "always") a.shouldReduceMotion = true;
  else {
    if (!cd.current) initPrefersReducedMotion();
    a.shouldReduceMotion = bd.current;
  }
  let h = a.skipAnimationsConfig;
  a.shouldSkipAnimations = h ?? false;
  if (e) rd(e, a);
  Bd(a, a.props, a.presenceContext);
  a.hasBeenMounted = true;
};
export {
  qd
};
