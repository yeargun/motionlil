import { makeAnimationInstant } from "./part-206.js";
import { mf } from "./part-209.js";
import { getValueTransition } from "./part-223.js";
import { getDefaultTransition } from "./part-320.js";
import { isTransitionDefined } from "./part-321.js";
import { a } from "./part-425.js";
import { y } from "./part-427.js";
import { secondsToMilliseconds } from "./part-432.js";
import { getFinalKeyframe } from "./part-67.js";
import { vb } from "./part-73.js";
import "./effect-499.js";
import "./effect-573.js";
let animateMotionValue = function(b, c, d, e, f, g) {
  let h = e || {};
  return (e2) => {
    let o, p, i = getValueTransition(h, b) || {}, j = i.delay || (h.delay || 0), k = h.elapsed ?? 0;
    k = k - secondsToMilliseconds(j);
    let m = Object.assign((o = {
      keyframes: Array.isArray(d) ? d : [null, d],
      ease: "easeOut",
      velocity: c.getVelocity()
    }, p = {
      delay: -k,
      onUpdate: (a2) => {
        c.set(a2);
        if (i.onUpdate) i.onUpdate(a2);
      },
      onComplete: () => {
        e2();
        if (i.onComplete) i.onComplete();
      },
      name: b,
      motionValue: c,
      element: g ? void 0 : f
    }, o), i, p);
    if (!isTransitionDefined(i)) Object.assign(m, getDefaultTransition(b, m));
    if (m.duration) m.duration = secondsToMilliseconds(m.duration);
    if (m.repeatDelay) m.repeatDelay = secondsToMilliseconds(m.repeatDelay);
    if (m.from !== void 0) m.keyframes[0] = m.from;
    let n = false;
    if (m.type === false || m.duration === 0 && !m.repeatDelay) {
      makeAnimationInstant(m);
      n = m.delay === 0;
    }
    if (a.instantAnimations === true || a.skipAnimations === true || f && f.shouldSkipAnimations || i.skipAnimations) {
      n = true;
      makeAnimationInstant(m);
      m.delay = 0;
    }
    m.allowFlatten = !i.type && !i.ease;
    if (n && !g && c.get() != null) {
      let a2 = getFinalKeyframe(m.keyframes, i);
      if (a2 !== void 0) {
        y.update((b2) => {
          m.onUpdate(a2);
          m.onComplete();
        }, false, false);
        return;
      }
    }
    return i.isSync ? vb(m) : mf(m);
  };
};
export {
  animateMotionValue
};
