import { callFn2, callMethod1, isFunction } from "./../motion-dom/dom-host.js";
import { arrayFrom } from "./../motion-dom/string-host.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Lh = (vk, Ck, Dk, Ek = 0, Fk = 1) => {
  var Mk, Nk, xk, Ik, Gk, Lk, yk, zk, Ak, Jk, Ok, Bk, wk = arrayFrom(vk), Kk = wk.length, Hk = 0;
  for (; Hk < Kk; Hk = Hk + 1) {
    for (Jk = Hk + 1; Jk < Kk; Jk = Jk + 1 | 0) {
      Mk = callMethod1(wk[Hk], "sortNodePosition", wk[Jk]);
      if ("number" == typeof Mk) Ok = Mk;
      else Ok = 0;
      if (Ok > 0) {
        Nk = wk[Hk];
        wk[Hk] = wk[Jk];
        wk[Jk] = Nk;
      }
    }
  }
  xk = wk.indexOf(Ck);
  if (xk < 0) Bk = 0;
  else Bk = xk;
  Ik = 0 + Kk;
  Gk = 0 + Bk;
  Lk = (Ik - 1) * Ek;
  if (null != Dk) {
    yk = isFunction(Dk);
    zk = yk;
  } else zk = false;
  if (zk) {
    Ak = callFn2(Dk, Gk, Ik);
    if ("number" == typeof Ak) return Ak;
    return 0;
  }
  if (1 == Fk) return Gk * Ek;
  return Lk - Gk * Ek;
};
export {
  Lh
};
