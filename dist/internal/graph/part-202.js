import { setStyle } from "./part-187.js";
import { startWaapiAnimation } from "./part-192.js";
import { Ge } from "./part-194.js";
import { Ie } from "./part-196.js";
import { Je } from "./part-197.js";
import { Ke } from "./part-198.js";
import { Le } from "./part-199.js";
import { Me } from "./part-200.js";
import { Ne } from "./part-201.js";
import { secondsToMilliseconds } from "./part-432.js";
import { millisecondsToSeconds } from "./part-433.js";
import { dk } from "./part-472.js";
import { bb } from "./part-473.js";
import { cb } from "./part-475.js";
import { fk } from "./part-476.js";
import { Be } from "./part-509.js";
import { getFinalKeyframe } from "./part-67.js";
import { ab } from "./part-69.js";
import { Rl } from "./part-8.js";
import "./effect-499.js";
import "./effect-573.js";
let Re = (a, b, c) => {
  if (c === void 0) c = Oe;
  ab(a);
  Object.setPrototypeOf(a, c);
  a.finishedTime = null;
  a.isStopped = false;
  a.manualStartTime = null;
  if (!b) return;
  let f = b.pseudoElement;
  a.isPseudoElement = !!f;
  a.allowFlatten = !!b.allowFlatten;
  a.options = b;
  let g = Ge(b), h = startWaapiAnimation(b.element, b.name, b.keyframes, g, f);
  a.animation = h;
  if (g.autoplay === false) h.pause();
  h.onfinish = () => {
    a.finishedTime = Ie(a);
    if (!f) {
      let c2 = getFinalKeyframe(b.keyframes, a.options, b.finalKeyframe, h.playbackRate);
      if (a.updateMotionValue) a.updateMotionValue(c2);
      setStyle(b.element, b.name, c2);
      h.cancel();
    }
    if (b.onComplete) b.onComplete();
    a._resolve();
  };
};
let Oe = {};
let Qe = Rl((a, b) => {
  let c = {};
  Re(c, a, Oe);
  return c;
}, Oe, {
  finished: bb,
  then: cb,
  duration: {
    get: dk((a) => Je(a))
  },
  iterationDuration: {
    get: dk((a) => {
      let c = a.options, d = (c ? c.delay : void 0) || 0;
      return Je(a) + millisecondsToSeconds(d);
    })
  },
  time: {
    get: dk((a) => Ie(a)),
    set: fk((a, b) => {
      let d = a.finishedTime !== null;
      a.manualStartTime = null;
      a.finishedTime = null;
      a.animation.currentTime = secondsToMilliseconds(b);
      if (d) a.animation.pause();
    })
  },
  speed: {
    get: dk((a) => a.animation.playbackRate),
    set: fk((a, b) => {
      if (b < 0) a.finishedTime = null;
      a.animation.playbackRate = b;
    })
  },
  state: {
    get: dk((a) => Ke(a))
  },
  startTime: {
    get: dk((a) => Le(a)),
    set: fk((a, b) => {
      Me(a, b);
    })
  },
  play: {
    value: dk((a) => {
      if (!a.isStopped) {
        a.manualStartTime = null;
        a.animation.play();
        if (Ke(a) === "finished") ab(a);
      }
    })
  },
  pause: {
    value: dk((a) => {
      a.animation.pause();
    })
  },
  stop: {
    value: dk((a) => {
      if (a.isStopped) return;
      a.isStopped = true;
      let c = Ke(a);
      if (c === "idle" || c === "finished") return;
      if (a.updateMotionValue) a.updateMotionValue();
      else {
        let b = a.options, c2 = b ? b.element : void 0, d = a.animation;
        if (!a.isPseudoElement && c2 && c2.isConnected && d.commitStyles) d.commitStyles();
      }
      if (!a.isPseudoElement) Ne(a);
    })
  },
  complete: {
    value: dk((a) => {
      let b = a.animation;
      if (b.finish) b.finish();
    })
  },
  cancel: {
    value: dk((a) => {
      Ne(a);
    })
  },
  attachTimeline: {
    value: fk((a, b) => {
      let d = a.animation;
      if (a.allowFlatten) {
        let a2 = d.effect;
        if (a2) a2.updateTiming({
          easing: "linear"
        });
      }
      d.onfinish = null;
      let e = b.timeline;
      if (e && Be()) {
        d.timeline = e;
        let a2 = b.rangeStart, c = b.rangeEnd;
        if (a2) d.rangeStart = a2;
        if (c) d.rangeEnd = c;
        return () => {
        };
      }
      return b.observe(a);
    })
  }
});
export {
  Oe,
  Qe,
  Re
};
