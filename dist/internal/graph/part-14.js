import { bc } from "./part-107.js";
import { dc } from "./part-108.js";
import { ec } from "./part-109.js";
import { fc } from "./part-110.js";
import { gc } from "./part-111.js";
import { hc } from "./part-112.js";
import { jc } from "./part-113.js";
import { kc } from "./part-114.js";
import { lc } from "./part-115.js";
import { mc } from "./part-116.js";
import { nc } from "./part-117.js";
import { oc } from "./part-118.js";
import { pc } from "./part-119.js";
import { rc } from "./part-120.js";
import { fl } from "./part-4.js";
import { dk } from "./part-472.js";
import { ek } from "./part-474.js";
import { fk } from "./part-476.js";
import { gk } from "./part-487.js";
import { hk } from "./part-488.js";
import { Rl } from "./part-8.js";
import "./effect-499.js";
import "./effect-573.js";
let vc;
let wc;
let xc;
let yc;
let zc;
let Ac;
let Bc;
let Cc;
let Dc;
let Ec;
let Fc;
let Gc;
let Hc;
let Ic;
let Jc;
let Kc;
let Lc;
let Mc;
let Nc;
let Oc;
let motionValue = function(a, b = null) {
  let d = {
    owner: null,
    current: null,
    prev: null,
    prevFrameValue: null,
    updatedAt: 0,
    prevUpdatedAt: null,
    passiveEffect: null,
    stopPassiveEffect: null,
    animation: null,
    canTrackVelocity: null,
    dependents: null,
    events: null,
    hasAnimated: false
  };
  ((a2, b2) => {
    a2.events = {};
    Object.setPrototypeOf(a2, Zb);
    bc(a2, b2);
    a2.updateAndNotify = (b3) => nc(a2, b3);
  })(d, a);
  if (b != null) d.owner = b.owner;
  return d;
};
let Zb = {};
let $b = Rl((vc = (a, b) => motionValue(a, b), vc), Zb, {
  [(wc = {
    value: fk((a, b) => {
      bc(a, b);
    })
  }, xc = {
    value: fk((a, b) => {
      let d;
      return ec((d = b, a), "change", d);
    })
  }, yc = {
    value: ek((a, b, c) => {
      let e, f;
      return ec((e = b, f = c, a), e, f);
    })
  }, zc = {
    value: dk((a) => {
      fc(a);
    })
  }, Ac = {
    value: ek((a, b, c) => {
      let e, f;
      gc((e = b, f = c, a), e, f);
    })
  }, Bc = {
    value: fk((a, b) => {
      hc(a, b);
    })
  }, Cc = {
    value: gk((a, b, c, d) => {
      let f;
      ((a2, b2, c2, d2) => {
        hc(a2, c2);
        a2.prev = null;
        a2.prevFrameValue = b2;
        a2.prevUpdatedAt = a2.updatedAt - d2;
      })((f = d, a), b, c, f);
    })
  }, Dc = {
    value: Object.defineProperty(hk((a, b) => {
      let e, f, c = b[1];
      jc((e = b[0], f = c === void 0 || !!c, a), e, f);
    }), "length", {
      value: 1
    })
  }, Ec = {
    value: dk((a) => {
      kc(a);
    })
  }, Fc = {
    value: fk((a, b) => {
      let d;
      lc((d = b, a), d);
    })
  }, Gc = {
    value: fk((a, b) => {
      let d;
      mc((d = b, a), d);
    })
  }, Hc = {
    value: dk((a) => oc(a))
  }, Ic = {
    value: dk((a) => a.prev)
  }, Jc = {
    value: dk((a) => pc(a))
  }, Kc = {
    value: fk((a, b) => {
      let d;
      return ((a2, b2) => {
        rc(a2);
        return fl((c) => {
          a2.hasAnimated = true;
          a2.animation = b2(c);
          dc(a2, "animationStart");
        }).then((b3) => {
          dc(a2, "animationComplete");
          a2.animation = null;
        });
      })((d = b, a), d);
    })
  }, Lc = {
    value: dk((a) => {
      rc(a);
    })
  }, Mc = {
    value: dk((a) => a.animation != null)
  }, Nc = {
    value: dk((a) => {
      a.animation = null;
    })
  }, Oc = {
    value: dk((a) => {
      ((a2) => {
        a2.dependents = null;
        dc(a2, "destroy");
        fc(a2);
        rc(a2);
        let b = a2.stopPassiveEffect;
        if (b) b();
      })(a);
    })
  }, "setCurrent")]: wc,
  onChange: xc,
  on: yc,
  clearListeners: zc,
  attach: Ac,
  set: Bc,
  setWithVelocity: Cc,
  jump: Dc,
  dirty: Ec,
  addDependent: Fc,
  removeDependent: Gc,
  get: Hc,
  getPrevious: Ic,
  getVelocity: Jc,
  start: Kc,
  stop: Lc,
  isAnimating: Mc,
  clearAnimation: Nc,
  destroy: Oc
});
export {
  $b,
  Ac,
  Bc,
  Cc,
  Dc,
  Ec,
  Fc,
  Gc,
  Hc,
  Ic,
  Jc,
  Kc,
  Lc,
  Mc,
  Nc,
  Oc,
  Zb,
  motionValue,
  vc,
  wc,
  xc,
  yc,
  zc
};
