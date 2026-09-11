import { identity as asMotionValue } from "./../motion-dom/cast-host.js";
import { callFn0, callFn1, isFunction } from "./../motion-dom/dom-host.js";
import { hb } from "./part-107.js";
import { dc } from "./part-191.js";
import { S } from "./part-195.js";
import { e } from "./part-27.js";
import { Mh } from "./part-316.js";
import { Nh } from "./part-317.js";
import { Oh } from "./part-318.js";
import { Ph } from "./part-319.js";
import { ue } from "./part-320.js";
import { $m3$AsyncMotionValueAnimation } from "./part-448.js";
import { da } from "./part-453.js";
import { f } from "./part-455.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let sc = (wk, xk, yk, zk, Bk, Ck = false) => {
  var vk = zk;
  if (null == vk) vk = {
    __proto__: null
  };
  var Ak = asMotionValue(xk);
  return (em) => {
    var Lk = S(vk, wk);
    if (null == Lk) Lk = {
      __proto__: null
    };
    var fm = Lk.delay;
    if ("number" == typeof fm) {
      var gm, km, lm, Nl, nm, Al, yl, Bl, Nk, Ol, Pl, Ql, Rl, Sl, Tl, Ok, Ul, Vl, Wl, Xl, Yl, Zl, _l, $l, am, Pk, Qk, Rk, Cl, Dl, Sk, Tk, Uk, Vk, Wk, Xk, Yk, bm, cm, Zk, _k, El, Fl, $k, al, bl, cl, dl, el, fl, gl, hl, il, jl, Gl, kl, ll, ml, nl, ol, pl, ql, rl, sl, tl, hm, mm, jm, Hl, Il, Jl, ul, vl, wl, im = fm;
    } else {
      gm = vk.delay;
      if ("number" == typeof gm) hm = gm;
      else hm = 0;
      im = hm;
    }
    km = vk.elapsed;
    if ("number" == typeof km) mm = km;
    else mm = 0;
    lm = mm - e(im);
    Nl = [];
    if (Array.isArray(yk)) for (nm = yk.length | 0, jm = 0; jm < nm; jm = jm + 1) Nl.push(yk[jm]);
    else {
      Nl.push(null);
      Nl.push(yk);
    }
    Al = -lm;
    yl = {
      __proto__: null,
      keyframes: Nl,
      ease: "easeOut",
      velocity: Ak.getVelocity(),
      delay: Al,
      name: wk,
      motionValue: xk
    };
    Oh(yl, Lk);
    yl.delay = Al;
    yl.onUpdate = (Ro) => {
      Ak.set(Ro);
      var Po = Lk.onUpdate;
      if (isFunction(Po)) callFn1(Po, Ro);
    };
    yl.onComplete = () => {
      em();
      var Po = Lk.onComplete;
      if (isFunction(Po)) callFn0(Po);
    };
    if (!Ck) yl.element = Bk;
    if (!Nh(Lk)) {
      Bl = Mh(wk, yl);
      for (Nk in Bl) {
        if (!yl[Nk]) {
          Ol = !("number" == typeof yl[Nk]);
          Pl = Ol;
        } else Pl = false;
        if (Pl) {
          Ql = !("boolean" == typeof yl[Nk]);
          Rl = Ql;
        } else Rl = false;
        if (Rl) {
          Sl = !("string" == typeof yl[Nk]);
          Tl = Sl;
        } else Tl = false;
        if (Tl) yl[Nk] = Bl[Nk];
      }
      for (Ok in Bl) {
        if ("number" == typeof yl[Ok]) Vl = true;
        else {
          Ul = "string" == typeof yl[Ok];
          Vl = Ul;
        }
        if (Vl) Xl = true;
        else {
          Wl = "boolean" == typeof yl[Ok];
          Xl = Wl;
        }
        if (Xl) Zl = true;
        else {
          Yl = Array.isArray(yl[Ok]);
          Zl = Yl;
        }
        if (Zl) am = true;
        else {
          if ("object" == typeof yl[Ok]) {
            _l = !!yl[Ok];
            $l = _l;
          } else $l = false;
          am = $l;
        }
        if (!am) yl[Ok] = Bl[Ok];
      }
    }
    Pk = yl.duration;
    if ("number" == typeof Pk) yl.duration = e(Pk);
    Qk = yl.repeatDelay;
    if ("number" == typeof Qk) yl.repeatDelay = e(Qk);
    Rk = yl.from;
    if ("number" == typeof Rk) Dl = true;
    else {
      Cl = "string" == typeof Rk;
      Dl = Cl;
    }
    if (Dl) yl.keyframes[0] = Rk;
    if (Ph(yl.type)) Wk = true;
    else {
      if (ue(yl.duration)) {
        if ("number" == typeof yl.repeatDelay) {
          Sk = 0 != yl.repeatDelay;
          Tk = Sk;
        } else Tk = false;
        Uk = !Tk;
        Vk = Uk;
      } else Vk = false;
      Wk = Vk;
    }
    if (Wk) {
      dc(yl);
      if (ue(yl.delay)) Il = true;
      else Il = false;
      Jl = Il;
    } else Jl = false;
    if (da.instantAnimations) Yk = true;
    else {
      Xk = da.skipAnimations;
      Yk = Xk;
    }
    if (null != Bk) {
      bm = Bk.shouldSkipAnimations;
      if ("boolean" == typeof bm) cm = bm;
      else cm = false;
      if (cm) vl = true;
      else vl = Yk;
      wl = vl;
    } else wl = Yk;
    if (Lk.skipAnimations) ul = true;
    else ul = wl;
    if (ul) {
      dc(yl);
      yl.delay = 0;
      Hl = true;
    } else Hl = Jl;
    if (!Lk.type) {
      Zk = !Lk.ease;
      _k = Zk;
    } else _k = false;
    yl.allowFlatten = _k;
    if (Hl) El = !Ck;
    else El = false;
    if (El) {
      Fl = Ak.current;
      if (null != Fl) {
        if ("number" == typeof Fl) al = true;
        else {
          $k = "string" == typeof Fl;
          al = $k;
        }
        if (al) cl = true;
        else {
          bl = "boolean" == typeof Fl;
          cl = bl;
        }
        if (cl) el = true;
        else {
          dl = Array.isArray(Fl);
          el = dl;
        }
        if (el) hl = true;
        else {
          if ("object" == typeof Fl) {
            fl = !!Fl;
            gl = fl;
          } else gl = false;
          hl = gl;
        }
        il = hl;
      } else il = false;
      if (il) {
        jl = yl.keyframes;
        Gl = hb(jl, Lk, void 0, 1);
        if ("number" == typeof Gl) ll = true;
        else {
          kl = "string" == typeof Gl;
          ll = kl;
        }
        if (ll) nl = true;
        else {
          ml = "boolean" == typeof Gl;
          nl = ml;
        }
        if (nl) pl = true;
        else {
          ol = Array.isArray(Gl);
          pl = ol;
        }
        if (pl) sl = true;
        else {
          if ("object" == typeof Gl) {
            ql = !!Gl;
            rl = ql;
          } else rl = false;
          sl = rl;
        }
        if (sl) return f.update((Ro) => {
          var So = yl.onUpdate;
          if (isFunction(So)) callFn1(So, Gl);
          var Qo = yl.onComplete;
          if (isFunction(Qo)) callFn0(Qo);
        }, false, false), null;
      }
    }
    tl = new $m3$AsyncMotionValueAnimation(yl);
    return tl;
  };
};
export {
  sc
};
