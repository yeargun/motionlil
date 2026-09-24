import { rf } from "./part-211.js";
import { sf } from "./part-212.js";
import { tf } from "./part-213.js";
import { uf } from "./part-214.js";
import { vf } from "./part-215.js";
import { dk } from "./part-472.js";
import { fk } from "./part-476.js";
import { Rl } from "./part-8.js";
import "./effect-499.js";
import "./effect-573.js";
let zf = (a, b, c) => {
  if (c === void 0) c = wf;
  Object.setPrototypeOf(a, c);
  a.stop = () => {
    vf(a, "stop");
  };
  a.animations = b.filter((a2) => !!a2);
};
let wf = {};
let yf = Rl((a, b) => {
  let d = {
    animations: []
  };
  zf(d, a, wf);
  return d;
}, wf, {
  finished: {
    get: dk((a) => rf(a))
  },
  time: {
    get: dk((a) => sf(a, "time")),
    set: fk((a, b) => {
      tf(a, "time", b);
    })
  },
  speed: {
    get: dk((a) => sf(a, "speed")),
    set: fk((a, b) => {
      tf(a, "speed", b);
    })
  },
  state: {
    get: dk((a) => sf(a, "state"))
  },
  startTime: {
    get: dk((a) => sf(a, "startTime"))
  },
  duration: {
    get: dk((a) => uf(a, "duration"))
  },
  iterationDuration: {
    get: dk((a) => uf(a, "iterationDuration"))
  },
  attachTimeline: {
    value: fk((a, b) => {
      let c = a.animations, d = c.map((a2) => a2.attachTimeline(b));
      return () => {
        for (let a2 = 0; a2 < d.length; ++a2) {
          let b2 = d[a2];
          if (b2) b2();
          c[a2].stop();
        }
      };
    })
  },
  play: {
    value: dk((a) => vf(a, "play"))
  },
  pause: {
    value: dk((a) => vf(a, "pause"))
  },
  cancel: {
    value: dk((a) => vf(a, "cancel"))
  },
  complete: {
    value: dk((a) => vf(a, "complete"))
  }
});
export {
  wf,
  yf,
  zf
};
