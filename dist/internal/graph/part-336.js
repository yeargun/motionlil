import { Kd } from "./part-155.js";
import { p } from "./part-21.js";
import { resolveTransition } from "./part-222.js";
import { getValueTransition } from "./part-223.js";
import { animateMotionValue } from "./part-322.js";
import { setTarget } from "./part-332.js";
import { addValueToWillChange } from "./part-334.js";
import { getOptimisedAppearId } from "./part-335.js";
import { y } from "./part-427.js";
import { Cb } from "./part-478.js";
import "./effect-499.js";
import "./effect-573.js";
let animateTarget = function(a, b, c) {
  let d = c || {}, e = d.delay ?? 0, f = b.transition, g = b.transitionEnd, h = a.props.transition;
  f = f ? resolveTransition(f, h) : h;
  let i = f ? f.reduceMotion : void 0, j = !!f && !!f.skipAnimations;
  if (d.transitionOverride) f = d.transitionOverride;
  let k = [], l = a.animationState, m = d.type && l ? l.getState()[d.type] : void 0, n = {};
  for (let a2 in b) if (a2 != "transition" && a2 != "transitionEnd") n[a2] = b[a2];
  let o = f ? f.path : void 0;
  if (o) o.animateVisualElement(a, n, f, e, k);
  for (let b2 in n) {
    let u, t = a, c2 = Kd((u = a.latestValues[b2], t), b2, u, true), d2 = n[b2];
    if (d2 === void 0) continue;
    if (m) {
      let a2 = m.needsAnimating, c3 = b2 in m.protectedKeys && a2[b2] !== true;
      a2[b2] = false;
      if (c3) continue;
    }
    let g2 = Object.assign({
      delay: e
    }, getValueTransition(f || {}, b2));
    if (j) g2.skipAnimations = true;
    let h2 = c2.get();
    if (h2 != null && !c2.isAnimating() && !Array.isArray(d2) && d2 === h2 && !g2.velocity) {
      y.update((a2) => {
        c2.set(d2);
      }, false, false);
      continue;
    }
    let l2 = false, o2 = p("MotionHandoffAnimation");
    if (o2) {
      let c3 = getOptimisedAppearId(a);
      if (c3) {
        let a2 = o2(c3, b2, y);
        if (a2 !== null) {
          g2.startTime = a2;
          l2 = true;
        }
      }
    }
    addValueToWillChange(a, b2);
    let r = i ?? a.shouldReduceMotion;
    c2.start(animateMotionValue(b2, c2, d2, r && Cb.has(b2) ? {
      type: false
    } : g2, a, l2));
    let s = c2.animation;
    if (s) k.push(s);
  }
  if (g) {
    let b2 = () => {
      y.update((b3) => {
        setTarget(a, g);
      }, false, false);
    };
    if (k.length > 0) Promise.all(k).then((a2) => {
      b2();
      return true;
    });
    else b2();
  }
  return k;
};
export {
  animateTarget
};
