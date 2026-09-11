import { rk } from "./part-11.js";
import { ea } from "./part-468.js";
import { Rb } from "./part-47.js";
import { _ } from "./part-49.js";
import { $c } from "./part-51.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let $ = (vk, Ak = 0.3) => {
  var Jk = [0, 1], Ek = null, Ok = {
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
  _(Ok, Jk, Ek, Ek, Ek, Ek, Ek, Ek, Ek, Ek, Ek);
  if ("number" == typeof vk) {
    var Kk = [0, 1], Fk = null, Pk = vk, wk = {
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
    _(wk, Kk, Fk, Fk, Fk, Fk, Fk, Ak, Pk, Fk, Fk);
    var xk, Gk, Bk, Hk, Tk, Qk, Ck, Lk, Rk, Uk, Wk, Yk, _k, al, cl, el, yk, Ik, Mk, Nk, Sk, Vk, Xk, Zk, $k, bl, dl, Dk, zk = wk;
  } else {
    xk = vk;
    Gk = [0, 1];
    Bk = xk.keyframes;
    if (Array.isArray(Bk)) {
      for (Hk = [], Tk = Bk.length, Mk = 0; Mk < Tk; Mk = Mk + 1) {
        Qk = Bk[Mk];
        if ("number" == typeof Qk) Hk.push(Qk);
      }
      Ik = Hk;
    } else Ik = Gk;
    Ck = null;
    Lk = xk.stiffness;
    if ("number" == typeof Lk) Nk = Lk;
    else Nk = Ck;
    Rk = xk.damping;
    if ("number" == typeof Rk) Sk = Rk;
    else Sk = Ck;
    Uk = xk.mass;
    if ("number" == typeof Uk) Vk = Uk;
    else Vk = Ck;
    Wk = xk.velocity;
    if ("number" == typeof Wk) Xk = Wk;
    else Xk = Ck;
    Yk = xk.duration;
    if ("number" == typeof Yk) Zk = Yk;
    else Zk = Ck;
    _k = xk.bounce;
    if ("number" == typeof _k) $k = _k;
    else $k = Ck;
    al = xk.visualDuration;
    if ("number" == typeof al) bl = al;
    else bl = Ck;
    cl = xk.restSpeed;
    if ("number" == typeof cl) dl = cl;
    else dl = Ck;
    el = xk.restDelta;
    if ("number" == typeof el) Dk = el;
    else Dk = Ck;
    yk = {
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
    _(yk, Ik, Nk, Sk, Vk, Xk, Zk, $k, bl, dl, Dk);
    zk = yk;
  }
  return $c(zk);
};
$.applyToOptions = (Oz) => {
  var Pz = {
    __proto__: null
  };
  for (var Rz in Oz) Pz[Rz] = Oz[Rz];
  Pz.keyframes = [0, rk];
  var Qz = $(Pz, 0.3), Sz = Math.min(Rb(Qz.next), ea);
  Oz.ease = (eA) => Qz.next(Sz * eA).value / rk;
  Oz.duration = Sz;
  Oz.type = "keyframes";
  return Oz;
};
export {
  $
};
