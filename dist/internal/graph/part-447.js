import { identity as asMotionValue } from "./../motion-dom/cast-host.js";
import { callFn0, callFn1, isFunction } from "./../motion-dom/dom-host.js";
import { fb } from "./part-100.js";
import { gg } from "./part-103.js";
import { hg } from "./part-104.js";
import { gb } from "./part-106.js";
import { hb } from "./part-107.js";
import { rk } from "./part-11.js";
import { Dg } from "./part-151.js";
import { u } from "./part-17.js";
import { n } from "./part-25.js";
import { e } from "./part-27.js";
import { v } from "./part-28.js";
import { Wi } from "./part-437.js";
import { $m114$WithPromise } from "./part-441.js";
import { f } from "./part-455.js";
import { F } from "./part-456.js";
import { G } from "./part-457.js";
import { $ } from "./part-52.js";
import { nf } from "./part-554.js";
import { Ec } from "./part-555.js";
import { Fc } from "./part-556.js";
import { bb } from "./part-62.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
class $m20$JSAnimation extends $m114$WithPromise {
  options = null;
  initialVelocity = 0;
  resolvedKeyframes = [];
  mixKeyframes = null;
  timing = null;
  stopped = false;
  state = "";
  startTime = null;
  currentTime = 0;
  holdTime = null;
  playbackSpeed = 0;
  calculatedDuration = 0;
  resolvedDuration = 0;
  totalDuration = 0;
  springGen = null;
  mirroredGen = null;
  driver = null;
  delayState = null;
  constructor(wk) {
    super();
    this.options = wk;
    this.resolvedKeyframes = [];
    this.mixKeyframes = null;
    var xk = {
      delay: 0,
      repeat: 0,
      repeatDelay: 0,
      mode: 0,
      finalKeyframe: null
    };
    Dg(xk, wk);
    this.timing = xk;
    var yk = wk.velocity;
    if (null != yk) {
      var Ak, Bk, zk = yk;
    } else zk = 0;
    this.initialVelocity = zk;
    this.stopped = false;
    this.state = "idle";
    Ak = null;
    this.startTime = Ak;
    this.currentTime = 0;
    this.holdTime = Ak;
    this.playbackSpeed = 1;
    this.calculatedDuration = 0;
    this.resolvedDuration = 0;
    this.totalDuration = 0;
    this.springGen = Ak;
    this.mirroredGen = Ak;
    this.driver = Ak;
    Bk = {
      value: null,
      done: false
    };
    Bk.value = 0;
    Bk.done = false;
    this.delayState = Bk;
    this.initAnimation();
    this.play();
    if (false == wk.autoplay) this.pause();
    this.stop = () => {
      this.stopAnimation();
    };
  }
  attachTimeline(yk) {
    var zk = this.options;
    if (zk) {
      var Bk = zk.allowFlatten;
      if ("boolean" == typeof Bk && Bk) {
        zk.type = "keyframes";
        zk.ease = "linear";
        this.options = zk;
        this.initAnimation();
      }
    }
    this.stopDriver();
    if ("object" == typeof yk) {
      var Ak = yk.observe;
      if (isFunction(Ak)) {
        var wk = callFn1(Ak, this);
        return () => {
          if (isFunction(wk)) callFn0(wk);
        };
      }
    }
    if (isFunction(yk)) {
      var xk = callFn1(yk, this);
      return () => {
        if (isFunction(xk)) callFn0(xk);
      };
    }
    return () => {
    };
  }
  buildGenerator(Jk, Ok = false) {
    var Yk = this.options;
    if (null == Yk) {
      var Zk = {
        __proto__: null
      };
      this.options = Zk;
      var cl, jl, ll, ml, Pk, Qk, Rk, Sk, Kk, wk, xk, yk, zk, Ak, Tk, dl, Lk, Bk, Mk, Uk, el, nl, ol, pl, ql, rl, sl, Vk, _k, Ck, Dk, $k, fl, Ek, Wk, kl, Fk, Gk, gl, Xk, bl, hl, Hk, Nk, il, Ik, al = Zk;
    } else al = Yk;
    cl = al.type;
    jl = {
      __proto__: null
    };
    for (ll in al) jl[ll] = al[ll];
    jl.keyframes = Jk;
    if (Ok) jl.velocity = -this.initialVelocity;
    ml = "string" == typeof cl;
    if (ml) {
      Pk = "spring" == cl;
      Qk = Pk;
    } else Qk = false;
    if (Qk) Sk = true;
    else {
      Rk = cl == nf;
      Sk = Rk;
    }
    if (Sk) {
      Kk = $(jl, 0.3);
      Xk = {
        value: null,
        done: false
      };
      Xk.value = 0;
      Xk.done = false;
      bl = (ym) => {
        let zm = Kk.next(ym);
        Xk.value = zm.value;
        Xk.done = zm.done;
        return Xk;
      };
      hl = Kk.velocity;
      var Yl = Kk.calculatedDuration;
      Hk = {
        calculatedDuration: null,
        next: null,
        velocity: null
      };
      Hk.calculatedDuration = Yl;
      Hk.next = bl;
      Hk.velocity = hl;
      return Hk;
    }
    if (ml) {
      if ("inertia" == cl) xk = true;
      else {
        wk = "decay" == cl;
        xk = wk;
      }
      yk = xk;
    } else yk = false;
    if (yk) Ak = true;
    else {
      zk = cl == Ec;
      Ak = zk;
    }
    if (Ak) {
      for (Tk = [], Gk = 0; Gk < Jk.length; Gk = Gk + 1) {
        dl = Jk[Gk];
        if ("number" == typeof dl) Tk.push(dl);
      }
      Lk = null;
      Bk = {
        keyframes: [],
        velocity: 0,
        power: 0,
        timeConstant: 0,
        bounceDamping: 0,
        bounceStiffness: 0,
        modifyTarget: null,
        min: null,
        max: null,
        restDelta: 0,
        restSpeed: null
      };
      Bk.keyframes = Tk;
      Bk.velocity = 0;
      Bk.power = 0.8;
      Bk.timeConstant = 325;
      Bk.bounceDamping = 10;
      Bk.bounceStiffness = 500;
      Bk.modifyTarget = Lk;
      Bk.min = Lk;
      Bk.max = Lk;
      Bk.restDelta = 0.5;
      Bk.restSpeed = Lk;
      Mk = jl.velocity;
      Uk = al.power;
      el = al.timeConstant;
      nl = al.bounceDamping;
      ol = al.bounceStiffness;
      pl = al.min;
      ql = al.max;
      rl = al.restDelta;
      sl = al.restSpeed;
      if ("number" == typeof Mk) Bk.velocity = Mk;
      if ("number" == typeof Uk) Bk.power = Uk;
      if ("number" == typeof el) Bk.timeConstant = el;
      if ("number" == typeof nl) Bk.bounceDamping = nl;
      if ("number" == typeof ol) Bk.bounceStiffness = ol;
      if ("number" == typeof pl) Bk.min = pl;
      if ("number" == typeof ql) Bk.max = ql;
      if ("number" == typeof rl) Bk.restDelta = rl;
      if ("number" == typeof sl) Bk.restSpeed = sl;
      Vk = al.modifyTarget;
      if (isFunction(Vk)) Bk.modifyTarget = (ym) => {
        var xm = callFn1(Vk, ym);
        if ("number" == typeof xm) return xm;
        return ym;
      };
      _k = gb(Bk);
      Nk = {
        value: null,
        done: false
      };
      Nk.value = 0;
      Nk.done = false;
      il = (ym) => {
        let zm = _k.next(ym);
        Nk.value = zm.value;
        Nk.done = zm.done;
        return Nk;
      };
      var Zl = _k.calculatedDuration;
      Ik = {
        calculatedDuration: null,
        next: null,
        velocity: null
      };
      Ik.calculatedDuration = Zl;
      Ik.next = il;
      Ik.velocity = null;
      return Ik;
    }
    if (isFunction(cl)) {
      Ck = cl != Fc;
      Dk = Ck;
    } else Dk = false;
    if (Dk) {
      $k = callFn1(cl, jl);
      fl = null;
      Ek = $k.calculatedDuration;
      if ("number" == typeof Ek) gl = Ek;
      else gl = fl;
      var Vl = Jk[0];
      Wk = {
        value: null,
        done: false
      };
      Wk.value = Vl;
      Wk.done = false;
      kl = (zm) => Wi($k, Wk, zm);
      Fk = {
        calculatedDuration: null,
        next: null,
        velocity: null
      };
      Fk.calculatedDuration = gl;
      Fk.next = kl;
      Fk.velocity = null;
      return Fk;
    }
    return hg(Jk, jl);
  }
  cancel() {
    this.holdTime = null;
    this.startTime = 0;
    this.tick(0, false);
    this.teardown();
    var xk = this.options;
    if (xk) {
      var wk = xk.onCancel;
      if (isFunction(wk)) callFn0(wk);
    }
  }
  complete() {
    if ("running" != this.state) this.play();
    this.state = "finished";
    this.holdTime = null;
  }
  finish() {
    this.notifyFinished();
    this.teardown();
    this.state = "finished";
    var xk = this.options;
    if (xk) {
      var wk = xk.onComplete;
      if (isFunction(wk)) callFn0(wk);
    }
  }
  getDuration() {
    return v(this.calculatedDuration);
  }
  getGeneratorVelocity() {
    if (this.currentTime <= 0) return this.initialVelocity;
    var wk = this.springGen;
    if (wk) {
      var xk = wk.velocity;
      if (xk) return xk(this.currentTime);
      var yk = wk.next(this.currentTime).value;
      if ("number" == typeof yk) {
        var zk = this.currentTime, Ak = Math.max(zk - 5, 0);
        return bb(yk - ((bl) => {
          var cl = wk.next(bl).value;
          if ("number" == typeof cl) return cl;
          return 0;
        })(Ak), zk - Ak);
      }
    }
    return this.initialVelocity;
  }
  getIterationDuration() {
    let wk = this.getDuration();
    return wk + v(this.timing.delay);
  }
  getPlaybackSpeed() {
    return this.playbackSpeed;
  }
  getPlaybackTime() {
    return v(this.currentTime);
  }
  getStartTime() {
    return this.startTime;
  }
  getState() {
    return this.state;
  }
  initAnimation() {
    var wk = this.options, Lk = wk.keyframes;
    this.resolvedKeyframes = Lk;
    this.mixKeyframes = null;
    var Ok = wk.type;
    if ("string" == typeof Ok) {
      if ("spring" == Ok) {
        var xk, zk, Ak, Bk, Ck, Dk, Ek, Fk, Gk, Rk, Sk, Pk, Qk, Hk, Ik, Jk, Mk, Nk, Kk, yk = true;
      } else {
        xk = "inertia" == Ok;
        yk = xk;
      }
      if (yk) Ak = true;
      else {
        zk = "decay" == Ok;
        Ak = zk;
      }
      Bk = Ak;
    } else Bk = false;
    if (Bk) Ek = true;
    else {
      if (isFunction(Ok)) {
        Ck = Ok != Fc;
        Dk = Ck;
      } else Dk = false;
      Ek = Dk;
    }
    if (Ek) {
      Fk = !("number" == typeof Lk[0]);
      Gk = Fk;
    } else Gk = false;
    if (Gk) {
      Rk = fb(Lk[0])(Lk[0], Lk[1]);
      this.mixKeyframes = (Xl) => Rk(Xl / rk);
      Nk = [0, rk];
    } else Nk = Lk;
    this.springGen = this.buildGenerator(Nk, false);
    this.mirroredGen = null;
    Sk = this.timing.repeat;
    Pk = this.timing.repeatDelay;
    if (2 == this.timing.mode) {
      Qk = [];
      Hk = Nk.length - 1;
      Kk = Hk;
      while (Kk >= 0) {
        Qk.push(Nk[Kk]);
        Ik = Kk - 1;
        Kk = Ik;
      }
      this.mirroredGen = this.buildGenerator(Qk, true);
    }
    Jk = this.springGen;
    if (Jk) {
      Mk = Jk.calculatedDuration;
      if (null != Mk) this.calculatedDuration = Mk;
      else {
        this.calculatedDuration = gg(Jk);
        Jk.calculatedDuration = this.calculatedDuration;
      }
      this.resolvedDuration = this.calculatedDuration + Pk;
      this.totalDuration = this.resolvedDuration * (Sk + 1) - Pk;
    }
  }
  pause() {
    this.state = "paused";
    this.updateTime(n());
    this.holdTime = this.currentTime;
  }
  play() {
    if (this.stopped) return;
    if (!this.driver) {
      var Kk = (Cl) => {
        this.tick(Cl, false);
      }, Jk = (Cl) => {
        Kk(Cl.timestamp);
      }, ll = (Cl = true) => {
        f.update(Jk, Cl, false);
      }, ml = () => {
        F(Jk);
      }, nl = () => {
        if (G.isProcessing) return G.timestamp;
        return n();
      }, Bk = {
        start: null,
        stop: null,
        now: null
      };
      Bk.start = ll;
      Bk.stop = ml;
      Bk.now = nl;
      this.driver = Bk;
    }
    var Ek = this.options, wk = Ek.onPlay;
    if (isFunction(wk)) callFn0(wk);
    var Ck = this.driver;
    if (!Ck) return;
    var Dk = Ck.now(), xk = "finished" == this.state, Fk = this.holdTime;
    if (xk) {
      this.updateFinished();
      this.startTime = Dk;
    } else {
      if (null != Fk) this.startTime = Dk - Fk;
      else {
        if (null == this.startTime) {
          var Gk, Ik, yk, zk, Ak, Hk = true;
        } else {
          Gk = 0 == this.startTime;
          Hk = Gk;
        }
        if (Hk) {
          Ik = Ek.startTime;
          if ("number" == typeof Ik) this.startTime = Ik;
          else this.startTime = Dk;
        }
      }
    }
    if (xk) {
      yk = this.playbackSpeed < 0;
      zk = yk;
    } else zk = false;
    if (zk) {
      Ak = this.startTime;
      if (null != Ak) this.startTime = Ak + this.calculatedDuration;
    }
    this.holdTime = null;
    this.state = "running";
    Ck.start(true);
  }
  sample(wk) {
    this.startTime = 0;
    return this.tick(wk, true);
  }
  setPlaybackSpeed(wk) {
    var xk = this.playbackSpeed != wk;
    if (xk) {
      var yk = !!this.driver, zk = yk;
    } else zk = false;
    if (zk) this.updateTime(n());
    this.playbackSpeed = wk;
    if (xk && this.driver) this.setPlaybackTime(v(this.currentTime));
  }
  setPlaybackTime(wk) {
    var Dk = e(wk);
    this.currentTime = Dk;
    if (null == this.startTime) {
      var xk, zk, Ak, Bk, Ck, yk = true;
    } else {
      xk = null != this.holdTime;
      yk = xk;
    }
    if (yk) Ak = true;
    else {
      zk = 0 == this.playbackSpeed;
      Ak = zk;
    }
    if (Ak) this.holdTime = Dk;
    else {
      Bk = this.driver;
      if (Bk) this.startTime = Bk.now() - Dk / this.playbackSpeed;
    }
    Ck = this.driver;
    if (Ck) Ck.start(false);
    else {
      this.startTime = 0;
      this.state = "paused";
      this.holdTime = Dk;
      this.tick(Dk, false);
    }
  }
  stop() {
    this.stopAnimation();
  }
  stopAnimation() {
    var xk = this.options.motionValue;
    if (xk) {
      var yk, wk, zk = asMotionValue(xk).updatedAt != n(), Ak = zk;
    } else Ak = false;
    if (Ak) this.tick(n(), false);
    if ("idle" == this.state) {
      this.stopped = true;
      return;
    }
    this.stopped = true;
    this.teardown();
    yk = this.options;
    if (yk) {
      wk = yk.onStop;
      if (isFunction(wk)) callFn0(wk);
    }
  }
  stopDriver() {
    var wk = this.driver;
    if (wk) {
      wk.stop();
      this.driver = null;
    }
  }
  teardown() {
    this.state = "idle";
    this.stopDriver();
    let wk = null;
    this.startTime = wk;
    this.holdTime = wk;
  }
  tick(wk, $k = false) {
    var fl = this.startTime;
    if (null == fl) {
      var xk = this.springGen;
      if (xk) return xk.next(0);
      return this.delayState;
    }
    var gl = fl;
    if (this.playbackSpeed > 0) {
      this.startTime = gl;
      if (wk < gl) this.startTime = wk;
    } else {
      if (this.playbackSpeed < 0) {
        var pl = wk - this.totalDuration / this.playbackSpeed;
        this.startTime = gl;
        if (pl < gl) this.startTime = pl;
      }
    }
    if ($k) this.currentTime = wk;
    else this.updateTime(wk);
    if (this.playbackSpeed < 0) {
      var yk, zl, Al, al, bl, Kl, Ll, Dl, ql, zk, Ak, Bk, Ck, El, hl, Dk, Fl, Gl, il, Ek, Fk, jl, Hl, kl, ll, Gk, Il, rl, sl, Hk, Ik, Jk, cl, dl, el, tl, Bl, Kk, Lk, Mk, Nk, Ok, Pk, Qk, Rk, Sk, Cl, Jl, ul, vl, wl, xl, yl, Uk, ml, Vk, Wk, Xk, Yk, nl, ol, Zk, _k, Tk = -1;
    } else Tk = 1;
    yk = this.currentTime - this.timing.delay * Tk;
    zl = yk < 0;
    if (this.playbackSpeed < 0) {
      Al = yk > this.totalDuration;
      Cl = Al;
    } else Cl = zl;
    this.currentTime = 0;
    if (yk > 0) this.currentTime = yk;
    if ("finished" == this.state) {
      al = null == this.holdTime;
      bl = al;
    } else bl = false;
    if (bl) this.currentTime = this.totalDuration;
    Kl = this.timing.repeatDelay;
    Ll = this.timing.mode;
    Dl = this.currentTime;
    ql = this.springGen;
    if (this.timing.repeat > 0) {
      zk = this.resolvedDuration > 0;
      Ak = zk;
    } else Ak = false;
    if (Ak) {
      Bk = this.currentTime;
      if (Bk > this.totalDuration) {
        Ck = this.totalDuration;
        Uk = Ck;
      } else Uk = Bk;
      El = Uk / this.resolvedDuration;
      hl = El | 0;
      Dk = El - hl;
      if (0 == Dk) {
        Fl = El >= 1;
        Gl = Fl;
      } else Gl = false;
      if (Gl) {
        il = hl - 1 | 0;
        ml = il;
        Yk = 1;
      } else {
        ml = hl;
        Yk = Dk;
      }
      if (1 == ml % 2) {
        if (1 == Ll) {
          Ek = 1 - Yk;
          if (Kl > 0) {
            Fk = Ek - Kl / this.resolvedDuration;
            Vk = Fk;
          } else Vk = Ek;
          wl = ql;
          Wk = Vk;
        } else {
          if (2 == Ll) {
            jl = this.mirroredGen;
            if (jl) ul = jl;
            else ul = ql;
            vl = ul;
          } else vl = ql;
          wl = vl;
          Wk = Yk;
        }
        xl = wl;
        Xk = Wk;
      } else {
        xl = ql;
        Xk = Yk;
      }
      Hl = /* @__PURE__ */ u(0, 1, Xk) * this.resolvedDuration;
      Jl = Hl;
      yl = xl;
    } else {
      Jl = Dl;
      yl = ql;
    }
    kl = this.delayState;
    if (Cl) {
      kl.value = this.resolvedKeyframes[0];
      kl.done = false;
      ol = kl;
    } else {
      if (yl) {
        ll = yl.next(Jl);
        Gk = this.mixKeyframes;
        Il = ll.value;
        if (Gk) {
          rl = "number" == typeof Il;
          sl = rl;
        } else sl = false;
        if (sl) ll.value = Gk(Il);
        nl = ll;
      } else nl = kl;
      ol = nl;
    }
    Hk = ol.done;
    if (!Cl) {
      Ik = this.currentTime >= this.totalDuration;
      if (this.playbackSpeed < 0) {
        Jk = this.currentTime <= 0;
        Zk = Jk;
      } else Zk = Ik;
      _k = Zk;
    } else _k = Hk;
    if (null == this.holdTime) {
      if (bl) dl = true;
      else {
        if ("running" == this.state) cl = _k;
        else cl = false;
        dl = cl;
      }
      el = dl;
    } else el = false;
    tl = this.options;
    Bl = tl.type;
    if (el) {
      Kk = Bl != Ec;
      Lk = Kk;
    } else Lk = false;
    if (Lk) {
      if ("string" == typeof Bl) {
        if ("inertia" == Bl) Nk = true;
        else {
          Mk = "decay" == Bl;
          Nk = Mk;
        }
        Ok = Nk;
      } else Ok = false;
      Pk = !Ok;
      Qk = Pk;
    } else Qk = false;
    if (Qk) {
      Rk = this.resolvedKeyframes;
      ol.value = hb(Rk, tl, tl.finalKeyframe, this.playbackSpeed);
    }
    Sk = tl.onUpdate;
    if (Sk) Sk(ol.value);
    if (el) this.finish();
    return ol;
  }
  updateTime(wk) {
    var yk = this.startTime;
    if (null != yk) {
      var zk, xk, Ak = yk;
    } else Ak = 0;
    zk = Math.round(wk - Ak) * this.playbackSpeed;
    xk = this.holdTime;
    if (null != xk) this.currentTime = xk;
    else this.currentTime = zk;
  }
}
export {
  $m20$JSAnimation
};
