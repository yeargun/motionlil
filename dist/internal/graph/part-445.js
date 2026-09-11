import { callFn0, callFn1, callMethod0, callMethod1, isFunction } from "./../motion-dom/dom-host.js";
import { hb } from "./part-107.js";
import { Eg } from "./part-159.js";
import { Fg } from "./part-160.js";
import { Uc } from "./part-26.js";
import { e } from "./part-27.js";
import { v } from "./part-28.js";
import { $m114$WithPromise } from "./part-441.js";
import { W } from "./part-466.js";
import { lk } from "./part-5.js";
import { Gc } from "./part-560.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
class $m118$NativeAnimation extends $m114$WithPromise {
  options = null;
  animation = null;
  isStopped = false;
  finishedTime = null;
  allowFlatten = false;
  isPseudoElement = false;
  manualStartTime = null;
  constructor(wk = null) {
    super();
    this.options = wk;
    var zk = null;
    this.animation = zk;
    this.isStopped = false;
    this.finishedTime = zk;
    this.allowFlatten = false;
    this.isPseudoElement = false;
    this.manualStartTime = zk;
    if (wk == zk) return;
    var Ak = wk, Bk = W;
    Bk(!("string" == typeof wk.type), `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    var Ck = Ak.allowFlatten;
    if (null != Ck) {
      var Ek, Fk, xk, yk, Gk, Hk, Ik, Jk, Kk, Dk = Ck;
    } else Dk = false;
    this.allowFlatten = Dk;
    if (null != Ak.pseudoElement) {
      Ek = Ak.pseudoElement != lk;
      Fk = Ek;
    } else Fk = false;
    this.isPseudoElement = Fk;
    xk = Fg(wk);
    this.animation = Eg(Ak.element, Ak.name, Ak.keyframes, xk, Ak.pseudoElement ?? null);
    if (false == xk.autoplay) this.animation.pause();
    yk = Ak.keyframes;
    Gk = Ak.finalKeyframe;
    Hk = Ak.element;
    Ik = Ak.name;
    Jk = Ak.pseudoElement ?? null;
    Kk = Ak.onComplete ?? null;
    this.animation.onfinish = () => {
      this.finishedTime = this.getPlaybackTime();
      if (null == Jk) {
        var Al, Fl = true;
      } else Fl = Jk == lk;
      if (Fl) {
        Al = hb(yk, this.options, Gk, this.getPlaybackSpeed());
        if (null != this.updateMotionValue) callMethod1(this, "updateMotionValue", Al);
        Uc(Hk, Ik, Al);
        this.animation.cancel();
      }
      if (Kk) Kk();
      this.notifyFinished();
    };
  }
  attachTimeline(xk) {
    var Fk = null;
    if ("object" == typeof xk) {
      var Ik = xk.timeline;
      if (Ik) {
        var Kk, Mk, Ok, Jk, yk, zk, Ak, Qk, Bk, Ck, Dk, Ek, wk, Hk, Lk, Nk, Pk, Rk, Gk = Ik;
      } else Gk = Fk;
      Kk = xk.observe;
      Mk = xk.rangeStart;
      Ok = xk.rangeEnd;
      Hk = Gk;
      Lk = Kk;
      Nk = Mk;
      Pk = Ok;
    } else {
      Hk = Fk;
      Lk = Fk;
      Nk = Fk;
      Pk = Fk;
    }
    Jk = this.animation;
    if (this.allowFlatten) {
      yk = !!Jk;
      zk = yk;
    } else zk = false;
    if (zk) {
      Ak = Jk.effect;
      if (Ak) {
        Rk = isFunction(Ak.updateTiming);
        Qk = Rk;
      } else Qk = false;
      if (Qk) callMethod1(Ak, "updateTiming", {
        __proto__: null,
        easing: "linear"
      });
    }
    if (Jk) Jk.onfinish = null;
    if (Jk) {
      Bk = !!Hk;
      Ck = Bk;
    } else Ck = false;
    if (Ck) {
      Dk = Gc();
      Ek = Dk;
    } else Ek = false;
    if (Ek) {
      Jk.timeline = Hk;
      if (Nk) Jk.rangeStart = Nk;
      if (Pk) Jk.rangeEnd = Pk;
      return () => {
      };
    }
    if (isFunction(Lk)) {
      wk = callFn1(Lk, this);
      return () => {
        if (isFunction(wk)) callFn0(wk);
      };
    }
    return () => {
    };
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  commitStyles() {
    var Fk = this.options;
    if (this.isPseudoElement) {
      var yk, Ak, Bk, Gk, Ck, Dk, wk, Ek, xk, zk = true;
    } else {
      yk = !Fk;
      zk = yk;
    }
    if (zk) Bk = true;
    else {
      Ak = !("object" == typeof Fk);
      Bk = Ak;
    }
    if (Bk) return;
    Gk = Fk.element;
    if (!Gk) return;
    Ck = Gk.isConnected;
    if ("boolean" == typeof Ck) Ek = Ck;
    else Ek = true;
    if (!Ek) return;
    Dk = this.animation;
    if (Dk) {
      xk = isFunction(Dk.commitStyles);
      wk = xk;
    } else wk = false;
    if (wk) callMethod0(Dk, "commitStyles");
  }
  complete() {
    var yk = this.animation;
    if (yk) {
      var xk = isFunction(yk.finish), wk = xk;
    } else wk = false;
    if (wk) callMethod0(yk, "finish");
  }
  getDuration() {
    var xk = this.animation.effect;
    if (xk) {
      var wk = callMethod0(xk, "getComputedTiming");
      if (wk) return v(Number(wk.duration));
    }
    return 0;
  }
  getIterationDuration() {
    if (null != this.options) {
      var wk = this.options.delay;
      if (null != wk) {
        var yk, xk = wk;
      } else xk = 0;
      yk = xk;
    } else yk = 0;
    return this.getDuration() + v(yk);
  }
  getPlaybackSpeed() {
    return this.animation.playbackRate;
  }
  getPlaybackTime() {
    var yk = Number(this.animation.currentTime);
    if (0 == yk) {
      var wk, zk, xk = true;
    } else {
      wk = yk != yk;
      xk = wk;
    }
    if (xk) zk = 0;
    else zk = yk;
    return v(zk);
  }
  getStartTime() {
    var wk = this.manualStartTime;
    if (null != wk) {
      var xk, yk = wk;
    } else {
      xk = Number(this.animation.startTime);
      yk = xk;
    }
    return yk;
  }
  getState() {
    if (null != this.finishedTime) return "finished";
    return this.animation.playState;
  }
  pause() {
    this.animation.pause();
  }
  play() {
    if (this.isStopped) return;
    this.manualStartTime = null;
    this.animation.play();
    if ("finished" == this.getState()) this.updateFinished();
  }
  setPlaybackSpeed(wk) {
    if (wk < 0) this.finishedTime = null;
    var xk = this.animation;
    if (xk) xk.playbackRate = wk;
  }
  setPlaybackTime(wk) {
    var xk = null, zk = this.finishedTime != xk;
    this.manualStartTime = xk;
    this.finishedTime = xk;
    var yk = this.animation;
    if (yk) {
      yk.currentTime = e(wk);
      if (zk) this.pause();
    }
  }
  setStartTime(wk) {
    this.manualStartTime = wk;
    this.animation.startTime = wk;
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = true;
    var wk = this.getState();
    if ("idle" == wk) {
      var xk, yk = true;
    } else {
      xk = "finished" == wk;
      yk = xk;
    }
    if (yk) return;
    if (null != this.updateMotionValue) callMethod0(this, "updateMotionValue");
    else this.commitStyles();
    if (!this.isPseudoElement) this.cancel();
  }
}
export {
  $m118$NativeAnimation
};
