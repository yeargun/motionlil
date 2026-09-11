import { finishedTask } from "./../motion-dom/animation/utils/control-abi.js";
import { callMethod0 } from "./../motion-dom/dom-host.js";
import { l } from "./part-0.js";
import { jg } from "./part-112.js";
import { n } from "./part-25.js";
import { $m53$SubscriptionManager } from "./part-443.js";
import { f } from "./part-455.js";
import { vb } from "./part-502.js";
import { cb } from "./part-62.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
class $m91$MotionValue {
  owner = null;
  current = null;
  prev = null;
  prevFrameValue = null;
  updatedAt = 0;
  prevUpdatedAt = null;
  passiveEffect = null;
  stopPassiveEffect = null;
  isEffectActive = null;
  animation = null;
  canTrackVelocity = null;
  dependents = null;
  liveStyle = null;
  accelerate = null;
  events = /* @__PURE__ */ new Map();
  eventKeys = [];
  hasAnimated = false;
  constructor(wk, xk = null) {
    var yk = null;
    this.owner = yk;
    this.current = yk;
    this.prev = yk;
    this.prevFrameValue = yk;
    this.updatedAt = 0;
    this.prevUpdatedAt = yk;
    this.passiveEffect = yk;
    this.stopPassiveEffect = yk;
    this.isEffectActive = yk;
    this.animation = yk;
    this.canTrackVelocity = yk;
    this.dependents = yk;
    this.liveStyle = yk;
    this.accelerate = yk;
    this.events = /* @__PURE__ */ new Map();
    this.eventKeys = [];
    this.hasAnimated = false;
    this.setCurrent(wk);
    if (xk) this.owner = xk.owner;
  }
  addDependent(wk) {
    if (!this.dependents) this.dependents = [];
    var xk = this.dependents;
    if (xk && xk.indexOf(wk) == -1) xk.push(wk);
  }
  attach(wk, xk) {
    this.passiveEffect = wk;
    this.stopPassiveEffect = xk;
  }
  clearAnimation() {
    this.animation = null;
  }
  clearListeners() {
    var xk, wk = 0;
    for (; wk < this.eventKeys.length; ) {
      xk = this.events.get(this.eventKeys[wk] || "");
      if (xk) xk.clear();
      wk += 1;
    }
  }
  destroy() {
    this.dependents = [];
    var wk = this.events.get("destroy");
    if (wk) wk.notify(void 0, void 0, void 0);
    this.clearListeners();
    this.stop();
    var xk = this.stopPassiveEffect;
    if (xk) xk();
  }
  dirty() {
    var wk = this.events.get("change");
    if (wk) wk.notify(this.current, void 0, void 0);
  }
  get() {
    var wk = vb.current;
    if (wk) wk.push(this);
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    var Dk = n(), zk = this.canTrackVelocity;
    if (null == zk) return 0;
    if (!zk) return 0;
    if (null == this.prevFrameValue) return 0;
    if (Dk - this.updatedAt > 30) return 0;
    var Ak = this.prevUpdatedAt;
    if (null == Ak) return 0;
    var Bk = this.updatedAt - Ak;
    if (Bk > 30) {
      var Ek, Fk, wk, xk, yk, Ck = 30;
    } else Ck = Bk;
    Ek = this.current;
    Fk = this.prevFrameValue;
    if (null == Ek) xk = true;
    else {
      wk = null == Fk;
      xk = wk;
    }
    if (xk) return 0;
    yk = l(Ek);
    return cb(yk - l(Fk), Ck);
  }
  isAnimating() {
    return null != this.animation;
  }
  jump(wk, zk = true) {
    this.updateAndNotify(wk);
    this.prev = wk;
    var xk = null;
    this.prevUpdatedAt = xk;
    this.prevFrameValue = xk;
    if (zk) this.stop();
    var yk = this.stopPassiveEffect;
    if (yk) yk();
  }
  on(wk, xk) {
    var zk = this.events.get(wk);
    if (zk) {
      var Ak, yk, Bk = zk;
    } else {
      Ak = new $m53$SubscriptionManager();
      Bk = Ak;
    }
    if (!zk) {
      this.events.set(wk, Bk);
      if (this.eventKeys.indexOf(wk) == -1) this.eventKeys.push(wk);
    }
    yk = Bk.add(xk);
    if ("change" == wk) return () => {
      yk();
      f.read((el) => {
        var fl = this.events.get("change");
        if (!fl) this.stop();
        else {
          if (0 == fl.getSize()) this.stop();
        }
      }, false, false);
    };
    return yk;
  }
  onChange(wk) {
    return this.on("change", wk);
  }
  removeDependent(xk) {
    var yk = this.dependents;
    if (yk) {
      var wk = yk.indexOf(xk);
      if (wk > -1) yk.splice(wk, 1);
    }
  }
  set(wk) {
    var xk = this.passiveEffect;
    if (!xk) this.updateAndNotify(wk);
    else xk(wk, (Ik) => {
      this.updateAndNotify(Ik);
    });
  }
  setCurrent(wk) {
    this.current = wk;
    this.updatedAt = n();
    if (null == this.canTrackVelocity) this.canTrackVelocity = jg(wk);
  }
  setPrevFrameValue(wk = null) {
    if (null != wk) this.prevFrameValue = wk;
    else this.prevFrameValue = this.current;
    this.prevUpdatedAt = this.updatedAt;
  }
  setWithVelocity(wk, xk, yk) {
    this.set(xk);
    this.prev = null;
    this.prevFrameValue = wk;
    this.prevUpdatedAt = this.updatedAt - yk;
  }
  start(wk) {
    this.stop();
    return finishedTask((Hk) => {
      this.hasAnimated = true;
      this.animation = wk(Hk);
      var Fk = this.events.get("animationStart");
      if (Fk) Fk.notify(void 0, void 0, void 0);
    }).then((Fk) => {
      var Gk = this.events.get("animationComplete");
      if (Gk) Gk.notify(void 0, void 0, void 0);
      this.clearAnimation();
    });
  }
  stop() {
    var wk = this.animation;
    if (null != wk) {
      callMethod0(wk, "stop");
      var xk = this.events.get("animationCancel");
      if (xk) xk.notify(void 0, void 0, void 0);
    }
    this.clearAnimation();
  }
  updateAndNotify(xk) {
    if (this.updatedAt != n()) this.setPrevFrameValue(null);
    this.prev = this.current;
    this.setCurrent(xk);
    if (this.current != this.prev) {
      var yk = this.events.get("change");
      if (yk) yk.notify(this.current, void 0, void 0);
      var zk = this.dependents;
      if (zk) {
        var wk = 0;
        while (wk < zk.length) {
          zk[wk].dirty();
          wk += 1;
        }
      }
    }
  }
}
export {
  $m91$MotionValue
};
