import { ig } from "./part-105.js";
import { _ } from "./part-49.js";
import { lk } from "./part-5.js";
import { $ } from "./part-52.js";
import { cb } from "./part-62.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let gb = (vk) => {
  var Fk = vk.keyframes[0], Jk = vk.timeConstant, Lk = vk.bounceDamping, Nk = vk.bounceStiffness, Pk = vk.restDelta, Rk = vk.min, Sk = vk.max, Tk = vk.restSpeed, xk = vk.power * vk.velocity, Hk = Fk + xk, Bk = vk.modifyTarget;
  if (Bk) {
    var yk, wk, Kk, Mk, Dk, Gk, Ok, Ik, Qk, zk, Ak, Ck = Bk(Hk), Ek = Ck;
  } else Ek = Hk;
  if (Ek != Hk) {
    yk = Ek - Fk;
    Ak = yk;
  } else Ak = xk;
  wk = [null, null, false, 0, 0, 0, 0, 0, 0, 0, null, null, null, null];
  ig(wk, Fk, Ak, Ek, Jk, Pk, Lk, Nk, Rk, Sk, Tk);
  Kk = (Bl) => {
    var Cl = wk[10], Dl = wk[11];
    if (null != Cl && Bl < Cl) return true;
    if (null != Dl && Bl > Dl) return true;
    return false;
  };
  Mk = (Bl) => {
    var Dl = wk[10], Cl = wk[11];
    if (null == Dl) {
      if (null != Cl) return Cl;
      return Bl;
    }
    if (null == Cl) return Dl;
    if (Math.abs(Dl - Bl) < Math.abs(Cl - Bl)) return Dl;
    return Cl;
  };
  Dk = (Bl) => -wk[3] * Math.exp(-Bl / wk[6]);
  Gk = (Cl) => wk[4] + Dk(Cl);
  Ok = (Fl) => {
    var Cl = Dk(Fl), El = Gk(Fl);
    wk[13].done = Math.abs(Cl) <= wk[7];
    if (wk[13].done) wk[13].value = wk[4];
    else wk[13].value = El;
  };
  Ik = (Il) => {
    if (!Kk(wk[13].value)) return;
    wk[0] = Il;
    var Kl = [wk[13].value, Mk(wk[13].value)], Ll = wk[9], Ml = wk[8], Cl = null, Nl = wk[13].value, Fl = Math.max(Il - 5, 0), Ol = cb(Nl - Gk(Fl), Il - Fl), El = wk[12], Hl = wk[7], Jl = {
      keyframes: [],
      stiffness: null,
      damping: null,
      mass: null,
      velocity: null,
      duration: null,
      bounce: null,
      visualDuration: null,
      restSpeed: null,
      restDelta: null
    };
    _(Jl, Kl, Ll, Ml, Cl, Ol, Cl, Cl, Cl, El, Hl);
    wk[1] = $(Jl, 0.3);
    wk[2] = true;
  };
  Ik(0);
  Qk = (El) => {
    var Fl = wk[0];
    if (!wk[2]) {
      var Dl, Il, Jl, Gl = null == Fl, Hl = Gl;
    } else Hl = false;
    if (Hl) {
      Ok(El);
      Ik(El);
      Jl = true;
    } else Jl = false;
    Dl = wk[0];
    if (null != Dl && El >= Dl) {
      Il = wk[1];
      if (Il) return Il.next(El - Dl);
    }
    if (!Jl) Ok(El);
    return wk[13];
  };
  var al = (Al) => 0, bl = () => lk, cl = () => {
  };
  zk = {
    calculatedDuration: null,
    velocity: null,
    next: null,
    toString: null,
    toTransition: null
  };
  zk.calculatedDuration = null;
  zk.velocity = al;
  zk.next = Qk;
  zk.toString = bl;
  zk.toTransition = cl;
  return zk;
};
export {
  gb
};
