import { Ma } from "./part-100.js";
import { kd } from "./part-102.js";
import { u } from "./part-17.js";
import { oa } from "./part-38.js";
let hg = (xk, yk) => {
  var wk = 300, Kk = yk.duration;
  if ("number" == typeof Kk) wk = Kk;
  var Lk = yk.ease;
  if (null == Lk) {
    var Uk, Vk, Sk, Wk, Xk, Yk, Ok, zk, Zk, Ak, Bk, Pk, Tk, Ck, Dk, Mk, Qk, Ek, Rk, Fk, Gk, Hk, Ik, Jk, Nk = "easeInOut";
  } else Nk = Lk;
  if (Array.isArray(Nk)) {
    Uk = !("number" == typeof Nk[0]);
    Vk = Uk;
  } else Vk = false;
  Sk = yk.times;
  if (Array.isArray(Sk)) {
    Wk = (Sk.length | 0) == xk.length;
    Xk = Wk;
  } else Xk = false;
  var vk = [];
  for (Yk = [], Ok = [], Rk = 0; Rk < xk.length; Rk = Rk + 1) {
    if (xk.length > 1) {
      zk = Rk / (xk.length - 1);
      Hk = zk;
    } else Hk = 0;
    if (Xk) {
      Zk = Sk[Rk];
      if ("number" == typeof Zk) Fk = Zk;
      else Fk = Hk;
      Gk = Fk;
    } else Gk = Hk;
    vk.push(Gk * wk);
  }
  if (vk.length > 1) {
    Ak = vk[0] > vk[vk.length - 1];
    Bk = Ak;
  } else Bk = false;
  if (Bk) {
    Pk = [];
    Tk = [];
    Ck = xk.length - 1;
    Ik = Ck;
    while (Ik >= 0) {
      Pk.push(vk[Ik]);
      Tk.push(xk[Ik]);
      Dk = Ik - 1;
      Ik = Dk;
    }
    vk = Pk;
    xk = Tk;
  }
  for (Jk = 0; Jk < xk.length - 1; Jk = Jk + 1) {
    Yk.push(Ma(xk[Jk])(xk[Jk], xk[Jk + 1]));
    if (Vk) {
      if (Jk < (Nk.length | 0)) Ok.push(kd(Nk[Jk]));
      else Ok.push((Nm) => Nm);
    } else Ok.push(kd(Nk));
  }
  var jm = xk[0];
  Mk = {
    value: null,
    done: false
  };
  Mk.value = jm;
  Mk.done = false;
  Qk = (Um) => {
    var Xm, Ym, Om, Wm = /* @__PURE__ */ u(vk[0], vk[vk.length - 1], Um), Vm = 0;
    for (; ; ) {
      if (Vm < vk.length - 2) {
        Xm = Wm >= vk[Vm + 1];
        Ym = Xm;
      } else Ym = false;
      if (!Ym) {
        break;
      }
      Vm += 1;
    }
    if (1 == xk.length) Mk.value = xk[0];
    else {
      Om = Yk[Vm];
      Mk.value = Om(Ok[Vm](/* @__PURE__ */ oa(vk[Vm], vk[Vm + 1], Wm)));
    }
    Mk.done = Um >= wk;
    return Mk;
  };
  Ek = {
    calculatedDuration: null,
    next: null,
    velocity: null
  };
  Ek.calculatedDuration = wk;
  Ek.next = Qk;
  Ek.velocity = null;
  return Ek;
};
export {
  hg
};
