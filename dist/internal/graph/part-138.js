import { hc } from "./part-112.js";
import { isMotionValue } from "./part-126.js";
import { isControllingVariants } from "./part-129.js";
import { isVariantNode } from "./part-130.js";
import { pd } from "./part-139.js";
import { ud } from "./part-143.js";
import { Qd } from "./part-159.js";
let ld = (a, b, c, d, e) => {
  let g = d.visualState, h = g.latestValues, i = d.props, j = d.parent;
  a.type = b;
  a.renderer = c;
  a.children = /* @__PURE__ */ new Set();
  a.isVariantNode = false;
  a.shouldSkipAnimations = false;
  a.values = /* @__PURE__ */ new Map();
  a.features = {};
  a.valueSubscriptions = /* @__PURE__ */ new Map();
  a.prevMotionValues = {};
  a.hasBeenMounted = false;
  a.events = {};
  a.propEventSubscriptions = {};
  a.renderScheduledAt = 0;
  a.notifyUpdate = (b2) => {
    Qd(a, "Update", a.latestValues);
  };
  a.render = (b2) => {
    ud(a);
  };
  a.latestValues = h;
  let k = {}, l = {};
  for (let a2 in h) {
    k[a2] = h[a2];
    if (i.initial) l[a2] = h[a2];
  }
  a.baseTarget = k;
  a.initialValues = l;
  a.renderState = g.renderState;
  a.parent = j;
  a.props = i;
  a.presenceContext = d.presenceContext;
  a.depth = j ? j.depth + 1 : 0;
  a.reducedMotionConfig = d.reducedMotionConfig;
  a.skipAnimationsConfig = d.skipAnimations;
  a.options = e || {};
  a.blockInitialAnimation = !!d.blockInitialAnimation;
  a.isControllingVariants = isControllingVariants(i);
  let m = isVariantNode(i);
  a.isVariantNode = m;
  if (m) a.variantChildren = /* @__PURE__ */ new Set();
  a.manuallyAnimateOnMount = !!(j && j.current);
  if (b == "svg") a.isSVGTag = false;
  let n = pd(a, i, {}, a);
  for (let a2 in n) {
    let b2 = n[a2];
    if (a2 != "willChange" && h[a2] !== void 0 && isMotionValue(b2)) hc(b2, h[a2]);
  }
};
export {
  ld
};
