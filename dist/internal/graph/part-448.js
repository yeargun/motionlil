import { asyncOptions } from "./../motion-dom/animation/utils/control-abi.js";
import { identity as asWithPromise } from "./../motion-dom/cast-host.js";
import { callFn0, callFn1, callMethod0, callMethod1, isFunction } from "./../motion-dom/dom-host.js";
import { hb } from "./part-107.js";
import { Kg } from "./part-165.js";
import { Id, Og } from "./part-180.js";
import { Hd } from "./part-181.js";
import { Ld } from "./part-185.js";
import { Qg } from "./part-186.js";
import { Sg } from "./part-189.js";
import { Tg } from "./part-190.js";
import { dc } from "./part-191.js";
import { n } from "./part-25.js";
import { $m114$WithPromise } from "./part-441.js";
import { $m20$JSAnimation } from "./part-447.js";
import { $m8$NativeAnimationExtended } from "./part-450.js";
import { da } from "./part-453.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
class $m3$AsyncMotionValueAnimation extends $m114$WithPromise {
  options = null;
  animation = null;
  resolver = null;
  createdAt = 0;
  resolvedAt = null;
  pendingTimeline = null;
  stopTimeline = null;
  isStopped = false;
  constructor(wk) {
    super();
    this.options = asyncOptions(wk);
    let xk = null;
    this.animation = xk;
    this.resolver = xk;
    this.createdAt = n();
    this.resolvedAt = xk;
    this.pendingTimeline = xk;
    this.stopTimeline = xk;
    this.isStopped = false;
    this.createAnimation();
    this.stop = () => {
      this.stopAnimation();
    };
  }
  attachTimeline(wk) {
    var yk = this.animation;
    if (null != yk) {
      if (isFunction(yk.attachTimeline)) {
        var xk = callMethod1(yk, "attachTimeline", wk);
        if (isFunction(xk)) this.stopTimeline = () => {
          callFn0(xk);
        };
      }
    } else this.pendingTimeline = wk;
    return () => {
      this.stop();
    };
  }
  cancel() {
    var wk = this.animation;
    if (null != wk) callMethod0(wk, "cancel");
    var xk = this.resolver;
    if (xk) Ld(xk);
  }
  complete() {
    var wk = this.getAnimation();
    if (wk) callMethod0(wk, "complete");
  }
  createAnimation() {
    var wk = this.options, Bk = wk.keyframes, Ck = wk.name ?? null, Dk = wk.motionValue, Ak = wk.element, Ek = (Vk, Wk, Xk) => {
      this.onKeyframesResolved(Vk, Wk, !Xk);
    }, xk = {
      name: null,
      element: null,
      finalKeyframe: null,
      suspendedScrollY: null,
      unresolvedKeyframes: [],
      motionValue: null,
      onComplete: null,
      state: "",
      isAsync: false,
      needsMeasurement: false,
      readKeyframesHook: null,
      measureInitialStateHook: null,
      measureEndStateHook: null
    };
    Hd(xk, Bk, Ek, Ck, Dk, Ak, false);
    if (Ak) {
      var yk = Sg(Bk, Ek, Ck, Dk, Ak), zk = yk;
    } else zk = xk;
    this.resolver = zk;
    Id(zk);
  }
  getAnimation() {
    if (null == this.animation) {
      var wk = this.resolver;
      if (wk) Qg(wk);
      Og();
    }
    return this.animation;
  }
  getDuration() {
    return callMethod0(this.getAnimation(), "getDuration");
  }
  getIterationDuration() {
    return callMethod0(this.getAnimation(), "getIterationDuration");
  }
  getPlaybackSpeed() {
    return callMethod0(this.getAnimation(), "getPlaybackSpeed");
  }
  getPlaybackTime() {
    return callMethod0(this.getAnimation(), "getPlaybackTime");
  }
  getStartTime() {
    return callMethod0(this.getAnimation(), "getStartTime");
  }
  getState() {
    return callMethod0(this.getAnimation(), "getState");
  }
  onKeyframesResolved(xk, Bk, Dk) {
    this.resolver = null;
    var Jk = this.options;
    this.resolvedAt = n();
    var Tk = Jk.name ?? null, $k = Jk.type, Kk = Jk.velocity;
    if (null != Kk) {
      var Lk, bl, cl, Mk, Uk, Vk, Nk, Ek, Ok, Pk, Fk, Ck, Gk, Hk, Ik, Wk, Xk, Yk, Zk, yk, zk, Ak, _k, Qk, Rk, Sk, al = Kk;
    } else al = 0;
    Lk = Jk.delay;
    if (null != Lk) bl = Lk;
    else bl = 0;
    cl = !!Jk.isHandoff;
    Mk = Jk.onUpdate;
    if (!Tg(xk, Tk, $k, al)) {
      if (da.instantAnimations) Vk = true;
      else {
        Uk = 0 == bl;
        Vk = Uk;
      }
      if (Vk && isFunction(Mk)) callFn1(Mk, hb(xk, Jk, Bk, 1));
      if (xk.length > 0) xk[0] = xk[xk.length - 1];
      dc(Jk);
      Jk.repeat = 0;
      _k = false;
    } else _k = true;
    Nk = null;
    if (Dk) {
      Ek = this.resolvedAt;
      if (null == Ek) {
        Ok = this.createdAt;
        Rk = Ok;
      } else {
        if (Ek - this.createdAt > 40) Qk = Ek;
        else {
          Pk = this.createdAt;
          Qk = Pk;
        }
        Rk = Qk;
      }
      Sk = Rk;
    } else Sk = Nk;
    Jk.keyframes = xk;
    if (null != Bk) Jk.finalKeyframe = Bk;
    if (null != Sk) Jk.startTime = Sk;
    Fk = Jk.motionValue;
    Jk.element;
    if (Fk) {
      Ck = Fk.owner;
      if (Ck) {
        Gk = !!Ck.current;
        Hk = Gk;
      } else Hk = false;
      if (Hk) {
        Ik = Ck.current;
        Jk.element = Ik;
      }
    }
    var vk = null;
    if (_k) {
      Wk = !cl;
      Xk = Wk;
    } else Xk = false;
    if (Xk) {
      Yk = Kg(Jk, xk);
      Zk = Yk;
    } else Zk = false;
    if (Zk) try {
      yk = new $m8$NativeAnimationExtended(Jk);
      var Cm = yk;
      vk = Cm;
    } catch {
    }
    if (null == vk) {
      zk = new $m20$JSAnimation(Jk);
      vk = zk;
    }
    asWithPromise(vk).getFinished().then((Jm) => {
      this.notifyFinished();
      return true;
    });
    if (null != this.pendingTimeline) {
      if (isFunction(vk.attachTimeline)) {
        Ak = callMethod1(vk, "attachTimeline", this.pendingTimeline);
        if (isFunction(Ak)) this.stopTimeline = () => {
          callFn0(Ak);
        };
      }
      this.pendingTimeline = null;
    }
    this.animation = vk;
    this.finishedHook = () => asWithPromise(vk).getFinished();
  }
  pause() {
    var wk = this.getAnimation();
    if (wk) callMethod0(wk, "pause");
  }
  play() {
    var wk = this.getAnimation();
    if (wk) callMethod0(wk, "play");
  }
  sample(yk) {
    var wk = this.getAnimation();
    if (wk) {
      var xk = callMethod1(wk, "sample", yk);
      if ("object" == typeof xk) {
        var zk = xk.value;
        if ("number" == typeof zk) return zk;
      }
    }
    return 0;
  }
  setPlaybackSpeed(wk) {
    callMethod1(this.getAnimation(), "setPlaybackSpeed", wk);
  }
  setPlaybackTime(wk) {
    callMethod1(this.getAnimation(), "setPlaybackTime", wk);
  }
  stop() {
    this.stopAnimation();
  }
  stopAnimation() {
    this.isStopped = true;
    if (null != this.animation) callMethod0(this.animation, "stop");
    var wk = this.stopTimeline;
    if (wk) wk();
    var xk = this.resolver;
    if (xk) Ld(xk);
  }
}
export {
  $m3$AsyncMotionValueAnimation
};
