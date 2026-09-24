import { F } from "./part-430.js";
import { secondsToMilliseconds } from "./part-432.js";
import { millisecondsToSeconds } from "./part-433.js";
import { dk } from "./part-472.js";
import { bb } from "./part-473.js";
import { cb } from "./part-475.js";
import { fk } from "./part-476.js";
import { Ha } from "./part-54.js";
import { ab } from "./part-69.js";
import { hb } from "./part-70.js";
import { ib } from "./part-71.js";
import { jb } from "./part-72.js";
import { qb } from "./part-74.js";
import { rb } from "./part-75.js";
import { tb } from "./part-76.js";
import { Rl } from "./part-8.js";
import "./effect-499.js";
import "./effect-573.js";
let kb = function(a, b) {
  let e = secondsToMilliseconds(b);
  a.currentTime = e;
  let f = a.driver;
  if (a.startTime == null || a.holdTime != null || a.playbackSpeed == 0) a.holdTime = e;
  else if (f) a.startTime = f.now() - e / a.playbackSpeed;
  if (f) f.start(false);
  else {
    a.startTime = 0;
    a.state = "paused";
    a.holdTime = e;
    jb(a, e, false);
  }
};
let mb = function(a) {
  if (a.isStopped) return;
  let c = a.options;
  if (a.driver == null) {
    let b = (b2) => {
      jb(a, b2, false);
    }, d2 = c.driver;
    a.driver = d2 ? d2(b) : Ha(b);
  }
  let d = a.driver;
  if (c.onPlay) c.onPlay();
  let e = d.now(), f = a.holdTime;
  if (a.state == "finished") {
    ab(a);
    a.startTime = e;
  } else if (f != null) a.startTime = e - f;
  else if (!a.startTime) a.startTime = c.startTime ?? e;
  if (a.state == "finished" && a.playbackSpeed < 0) {
    let b = a.startTime;
    a.startTime = b + a.calculatedDuration;
  }
  a.holdTime = null;
  a.state = "running";
  d.start();
};
let nb = function(a) {
  a.state = "paused";
  ib(a, F.now());
  a.holdTime = a.currentTime;
};
let vb = (a) => {
  let b = Object.create(wb);
  ab(b);
  b.state = "idle";
  b.startTime = null;
  b.isStopped = false;
  b.currentTime = 0;
  b.holdTime = null;
  b.playbackSpeed = 1;
  b.delayState = {
    done: false,
    value: void 0
  };
  b.stop = () => rb(b);
  b.options = a;
  hb(b);
  mb(b);
  if (b.options.autoplay === false) nb(b);
  return b;
};
let wb = {};
let yb = Rl((a, b) => vb(a), wb, {
  finished: bb,
  then: cb,
  duration: {
    get: dk((a) => millisecondsToSeconds(a.calculatedDuration))
  },
  iterationDuration: {
    get: dk((a) => {
      let c = a.options.delay || 0;
      return millisecondsToSeconds(a.calculatedDuration) + millisecondsToSeconds(c);
    })
  },
  time: {
    get: dk((a) => millisecondsToSeconds(a.currentTime)),
    set: fk(kb)
  },
  speed: {
    get: dk((a) => a.playbackSpeed),
    set: fk(function(a, b) {
      let e = a.playbackSpeed != b;
      if (e && a.driver != null) ib(a, F.now());
      a.playbackSpeed = b;
      if (e && a.driver != null) kb(a, millisecondsToSeconds(a.currentTime));
    })
  },
  play: {
    value: dk(mb)
  },
  pause: {
    value: dk(nb)
  },
  complete: {
    value: dk(function(a) {
      if (a.state != "running") mb(a);
      a.state = "finished";
      a.holdTime = null;
    })
  },
  cancel: {
    value: dk(function(a) {
      a.holdTime = null;
      a.startTime = 0;
      jb(a, 0, false);
      qb(a);
      if (a.options.onCancel) a.options.onCancel();
    })
  },
  attachTimeline: {
    value: fk(function(a, b) {
      let d = a.options;
      if (d.allowFlatten) {
        d.type = "keyframes";
        d.ease = "linear";
        hb(a);
      }
      let e = a.driver;
      if (e) e.stop();
      return b.observe(a);
    })
  },
  sample: {
    value: fk((a, b) => tb(a, b))
  }
});
export {
  kb,
  mb,
  nb,
  vb,
  wb,
  yb
};
