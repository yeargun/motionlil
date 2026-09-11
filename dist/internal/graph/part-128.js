import { callFn3, isFunction } from "./../motion-dom/dom-host.js";
import { qd } from "./part-127.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let rg = (vk, wk, Ek, Hk) => {
  if (null != wk) {
    var Lk, Pk, xk, Mk, yk, Nk, Ok, Ik, Fk, zk, Ak, Bk, Ck, Dk, Qk, Gk, Jk = isFunction(wk), Kk = Jk;
  } else Kk = false;
  if (Kk) {
    Lk = qd(Hk);
    if (null == Ek) {
      Pk = vk.custom;
      Qk = Pk;
    } else Qk = Ek;
    xk = callFn3(wk, Qk, Lk[0], Lk[1]);
    Dk = xk;
  } else Dk = wk;
  if ("string" == typeof Dk) {
    Mk = vk.variants;
    if ("object" == typeof Mk) {
      yk = Mk[Dk];
      Bk = yk;
    } else Bk = null;
    Ck = Bk;
  } else Ck = Dk;
  if (null != Ck) {
    Nk = isFunction(Ck);
    Ok = Nk;
  } else Ok = false;
  if (Ok) {
    Ik = qd(Hk);
    if (null == Ek) {
      Fk = vk.custom;
      Gk = Fk;
    } else Gk = Ek;
    zk = callFn3(Ck, Gk, Ik[0], Ik[1]);
    Ak = zk;
  } else Ak = Ck;
  return Ak;
};
export {
  rg
};
