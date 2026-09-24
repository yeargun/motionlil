import { Ze } from "./part-15.js";
import { flushKeyframeResolvers, qe } from "./part-178.js";
import { pe } from "./part-179.js";
import { we } from "./part-185.js";
import { xe } from "./part-186.js";
import { bf } from "./part-205.js";
import { makeAnimationInstant } from "./part-206.js";
import { supportsBrowserAnimation } from "./part-208.js";
import { kf } from "./part-210.js";
import { a } from "./part-425.js";
import { F } from "./part-430.js";
import { dk } from "./part-472.js";
import { fk } from "./part-476.js";
import { getFinalKeyframe } from "./part-67.js";
import { ab } from "./part-69.js";
import { vb } from "./part-73.js";
import { Rl } from "./part-8.js";
import "./effect-499.js";
import "./effect-573.js";
let jf = function(a2) {
  if (!a2._animation) {
    let b = a2.keyframeResolver;
    if (b) xe(b);
    flushKeyframeResolvers();
  }
  return a2._animation;
};
let mf = (b) => {
  let c = Object.create(nf);
  ab(c);
  c.stop = () => kf(c);
  c.createdAt = F.now();
  let d = Object.assign({}, b);
  if (d.autoplay === void 0) d.autoplay = true;
  if (d.delay === void 0) d.delay = 0;
  if (d.type === void 0) d.type = "keyframes";
  if (d.repeat === void 0) d.repeat = 0;
  if (d.repeatDelay === void 0) d.repeatDelay = 0;
  if (d.repeatType === void 0) d.repeatType = "loop";
  let e = d.element, g = d.keyframes, i = d.name, j = d.motionValue, k = !!e && e.type !== "object", l = {};
  pe(l, g, (b2, e2, f) => {
    ((b3, c2, d2, e3, f2) => {
      let j2, k2;
      b3.keyframeResolver = null;
      b3.resolvedAt = F.now();
      let g2 = true;
      if (!bf(c2, e3.name, e3.type, e3.velocity)) {
        g2 = false;
        if ((a.instantAnimations === true || !((e3.delay ?? 0) || false)) && e3.onUpdate) e3.onUpdate(getFinalKeyframe(c2, e3, d2));
        c2[0] = c2[c2.length - 1];
        makeAnimationInstant(e3);
        e3.repeat = 0;
      }
      let h = Object.assign({
        startTime: f2 ? b3.resolvedAt - b3.createdAt > 40 ? b3.resolvedAt : b3.createdAt : void 0,
        finalKeyframe: d2
      }, e3), i2;
      h.keyframes = c2;
      if (g2 && !e3.isHandoff && supportsBrowserAnimation(h)) {
        let a2 = h.motionValue, b4 = a2 ? a2.owner : void 0, c3 = Object.assign({}, h);
        c3.element = b4 ? b4.current : void 0;
        try {
          let a3 = {};
          Ze(a3, c3);
          i2 = a3;
        } catch {
          i2 = vb(h);
        }
      } else i2 = vb(h);
      (j2 = i2.finished.then(() => {
        b3._resolve();
      }), k2 = () => {
      }, j2).catch(k2);
      if (b3.pendingTimeline) {
        b3.stopTimeline = i2.attachTimeline(b3.pendingTimeline);
        b3.pendingTimeline = void 0;
      }
      b3._animation = i2;
    })(c, b2, e2, d, !f);
  }, i, j, e, k);
  c.keyframeResolver = l;
  qe(l);
  return c;
};
let nf = {};
let pf = Rl((a2, b) => mf(a2), nf, {
  finished: {
    get: dk((a2) => a2._animation ? jf(a2).finished : a2._finished)
  },
  then: {
    value: fk((a2, b) => a2.finished.finally(b).then(() => {
    }))
  },
  duration: {
    get: dk((a2) => jf(a2).duration)
  },
  iterationDuration: {
    get: dk((a2) => jf(a2).iterationDuration)
  },
  time: {
    get: dk((a2) => jf(a2).time),
    set: fk((a2, b) => {
      jf(a2).time = b;
    })
  },
  speed: {
    get: dk((a2) => jf(a2).speed),
    set: fk((a2, b) => {
      jf(a2).speed = b;
    })
  },
  state: {
    get: dk((a2) => jf(a2).state)
  },
  startTime: {
    get: dk((a2) => jf(a2).startTime)
  },
  animation: {
    get: dk(jf)
  },
  attachTimeline: {
    value: fk((a2, b) => {
      if (a2._animation) a2.stopTimeline = jf(a2).attachTimeline(b);
      else a2.pendingTimeline = b;
      return () => {
        kf(a2);
      };
    })
  },
  play: {
    value: dk((a2) => jf(a2).play())
  },
  pause: {
    value: dk((a2) => jf(a2).pause())
  },
  complete: {
    value: dk((a2) => jf(a2).complete())
  },
  cancel: {
    value: dk((a2) => {
      if (a2._animation) jf(a2).cancel();
      let c = a2.keyframeResolver;
      if (c) we(c);
    })
  }
});
export {
  jf,
  mf,
  nf,
  pf
};
