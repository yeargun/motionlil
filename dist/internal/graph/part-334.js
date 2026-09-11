import { identity as asMotionValue, identity as asVisualElement, identity as asWithPromise } from "./../motion-dom/cast-host.js";
import { callFn3, callFn5, hasFunction, isFunction, windowGet } from "./../motion-dom/dom-host.js";
import { Na } from "./part-146.js";
import { Nd } from "./part-194.js";
import { S } from "./part-195.js";
import { sc } from "./part-321.js";
import { Uh } from "./part-328.js";
import { Wh } from "./part-330.js";
import { Xh } from "./part-331.js";
import { Yh } from "./part-332.js";
import { Zh } from "./part-333.js";
import { f } from "./part-455.js";
import { J } from "./part-549.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let mb = (vk, wk, Vk) => {
  if (null == Vk) {
    var Xl, il, ml, ol, Yl, Al, Wk, ul, vl, xk, yk, wl, Xk, Yk, Zk, _k, $k, Tl, zk, Ak, zl, pl, Bk, al, bl, cl, ql, Ck, dl, el, fl, Zl, nl, Dk, Ek, Fk, Gk, Hk, Ik, Jk, Kk, Lk, Mk, Nk, Ok, Bl, _l, $l, Cl, Dl, am, bm, cm, dm, em, El, Fl, Gl, Hl, Il, fm, Jl, Kl, Ll, Ml, Nl, gm, Pk, Qk, Rk, gl, jl, Wl, kl, ll, Sk, xl, yl, Ul, Vl, rl, sl, tl, Ol, hm, im, jm, Pl, Ql, Tk, Uk, Rl, Sl, hl = {
      __proto__: null
    };
  } else hl = Vk;
  Rl = asVisualElement(vk);
  Xl = hl.delay;
  if ("number" == typeof Xl) Wl = Xl;
  else Wl = 0;
  il = hl.transitionOverride;
  ml = hl.type;
  ol = wk.transition;
  Yl = wk.transitionEnd;
  Al = {
    __proto__: null
  };
  for (Wk in wk) {
    if ("transition" != Wk) {
      ul = "transitionEnd" != Wk;
      vl = ul;
    } else vl = false;
    if (vl) Al[Wk] = wk[Wk];
  }
  xk = Rl.props.transition;
  if (ol) {
    yk = Nd(ol, xk);
    Sk = yk;
  } else Sk = xk;
  wl = null;
  if (Sk != wl) {
    Xk = "object" == typeof Sk;
    Yk = Xk;
  } else Yk = false;
  if (Yk) {
    Zk = Sk.reduceMotion;
    if ("boolean" == typeof Zk) xl = Zk;
    else xl = wl;
    yl = xl;
  } else yl = wl;
  if (null != Sk) {
    _k = "object" == typeof Sk;
    $k = _k;
  } else $k = false;
  if ($k) {
    Tl = Sk.skipAnimations;
    if ("boolean" == typeof Tl) Ul = Tl;
    else Ul = false;
    Vl = Ul;
  } else Vl = false;
  if (il) ll = il;
  else ll = Sk;
  if (null == ll) Ak = true;
  else {
    zk = !("object" == typeof ll);
    Ak = zk;
  }
  if (Ak) kl = {
    __proto__: null
  };
  else kl = ll;
  zl = [];
  pl = null;
  if ("string" == typeof ml) {
    Bk = Rl.animationState;
    if (Bk) {
      al = "object" == typeof Bk;
      bl = al;
    } else bl = false;
    if (bl) {
      cl = Bk.state;
      if (cl) {
        ql = cl[ml];
        rl = ql;
      } else rl = pl;
      sl = rl;
    } else sl = pl;
    tl = sl;
  } else tl = pl;
  Ck = kl.path;
  if (Ck) {
    dl = hasFunction(Ck, "animateVisualElement");
    el = dl;
  } else el = false;
  if (el) callFn5(Ck.animateVisualElement, vk, Al, kl, Wl, zl);
  for (fl in Al) {
    Zl = Na(Rl, fl, Rl.latestValues[fl], true);
    if (null == Zl) continue;
    Sl = asMotionValue(Zl);
    nl = Al[fl];
    if ("number" == typeof nl) Ek = true;
    else {
      Dk = "string" == typeof nl;
      Ek = Dk;
    }
    if (Ek) Gk = true;
    else {
      Fk = "boolean" == typeof nl;
      Gk = Fk;
    }
    if (Gk) Ik = true;
    else {
      Hk = Array.isArray(nl);
      Ik = Hk;
    }
    if (Ik) Lk = true;
    else {
      if ("object" == typeof nl) {
        Jk = !!nl;
        Kk = Jk;
      } else Kk = false;
      Lk = Kk;
    }
    if (!Lk) continue;
    if (tl) {
      Mk = Yh(tl, fl);
      Nk = Mk;
    } else Nk = false;
    if (Nk) continue;
    Ok = {
      __proto__: null,
      delay: Wl
    };
    Zh(Ok, S(kl, fl));
    if ("number" == typeof Xl) Ok.delay = Wl;
    else {
      Bl = null;
      if (kl != Bl) {
        _l = "object" == typeof kl;
        $l = _l;
      } else $l = false;
      if ($l) {
        Cl = kl.delay;
        Ol = Cl;
      } else Ol = Bl;
      if ("number" == typeof Ol) Ok.delay = Ol;
      else {
        if (!("number" == typeof Ok.delay)) Ok.delay = Wl;
      }
    }
    if (Vl) Ok.skipAnimations = true;
    Dl = Sl.current;
    am = Sl.isAnimating();
    if (null != Dl) {
      bm = !am;
      cm = bm;
    } else cm = false;
    if (cm) {
      dm = !Array.isArray(nl);
      em = dm;
    } else em = false;
    if (em) {
      El = nl == Dl;
      Fl = El;
    } else Fl = false;
    if (Fl) {
      Gl = !Ok.velocity;
      Hl = Gl;
    } else Hl = false;
    if (Hl) {
      f.update(/* @__PURE__ */ ((Oo, Po) => (Qo) => {
        Oo.set(Po);
      })(Sl, nl), false, false);
      continue;
    }
    Il = windowGet("MotionHandoffAnimation");
    if (isFunction(Il)) {
      fm = Xh(vk);
      if (fm) {
        Jl = callFn3(Il, fm, fl, f);
        if (null != Jl) {
          Ok.startTime = Jl;
          hm = true;
        } else hm = false;
        im = hm;
      } else im = false;
      jm = im;
    } else jm = false;
    Wh(vk, fl);
    if (null != yl) Ql = yl;
    else {
      Kl = Rl.shouldReduceMotion;
      if (null != Kl) Pl = Kl;
      else Pl = false;
      Ql = Pl;
    }
    if (Ql) {
      Ll = J.has(fl);
      Ml = Ll;
    } else Ml = false;
    if (Ml) {
      Nl = {
        __proto__: null
      };
      for (gm in Ok) Nl[gm] = Ok[gm];
      Nl.type = false;
      Tk = Nl;
    } else Tk = Ok;
    Sl.start(sc(fl, Zl, nl, Tk, vk, jm));
    Pk = Sl.animation;
    if (null != Pk) zl.push(Pk);
  }
  if (Yl) {
    Qk = "object" == typeof Yl;
    Rk = Qk;
  } else Rk = false;
  if (Rk) {
    gl = () => {
      f.update((Yo) => {
        Uh(vk, Yl);
      }, false, false);
    };
    if (zl.length > 0) {
      for (jl = [], Uk = 0; Uk < zl.length; Uk = Uk + 1) jl.push(asWithPromise(zl[Uk]).getFinished());
      Promise.all(jl).then((Po) => {
        gl();
        return true;
      });
    } else gl();
  }
  return zl;
};
export {
  mb
};
