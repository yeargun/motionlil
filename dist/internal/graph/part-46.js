import { na } from "./part-37.js";
import { Ob } from "./part-41.js";
import { Zc } from "./part-44.js";
import { Qf } from "./part-45.js";
import { lk } from "./part-5.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Qb = (vk) => {
  var Pk = vk.duration, zk = vk.keyframes, Bk = vk.ease;
  if ("string" == typeof Bk) {
    var Dk, Ek, Kk, Qk, Lk, Rk, Mk, wk, Ak, Fk, xk, Gk, Nk, Ok, yk, Sk, Ik, Jk, Ck = na(Bk), Hk = Ck;
  } else {
    if (Array.isArray(Bk)) {
      Dk = na(Bk);
      Gk = Dk;
    } else {
      Ek = Bk;
      Gk = Ek;
    }
    Hk = Gk;
  }
  Kk = zk[0];
  Qk = {
    done: false,
    value: 0
  };
  Qk.done = false;
  Qk.value = Kk;
  Lk = Zc(zk);
  Rk = vk.times;
  if (Rk) {
    if (Rk.length == zk.length) Nk = Rk;
    else Nk = Lk;
    Ok = Nk;
  } else Ok = Lk;
  for (Mk = Qf(Ok, Pk), yk = [], Sk = Hk, Ik = 0; Ik < zk.length; Ik = Ik + 1) yk.push(Sk);
  Jk = yk.splice(0, zk.length - 1);
  wk = {
    clampValues: false,
    ease: null
  };
  wk.clampValues = true;
  wk.ease = Jk;
  Ak = Ob(Mk, zk, wk);
  Fk = (zl) => {
    Qk.value = Ak(zl);
    Qk.done = zl >= Pk;
    return Qk;
  };
  var cl = (wl) => 0, dl = () => lk, el = () => {
  };
  xk = {
    calculatedDuration: null,
    velocity: null,
    next: null,
    toString: null,
    toTransition: null
  };
  xk.calculatedDuration = Pk;
  xk.velocity = cl;
  xk.next = Fk;
  xk.toString = dl;
  xk.toTransition = el;
  return xk;
};
export {
  Qb
};
