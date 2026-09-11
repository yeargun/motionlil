import { k } from "./part-120.js";
import { ai } from "./part-337.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let ve = (vk, wk, Ek) => {
  var Kk = {
    __proto__: null
  }, Jk = vk.style;
  if (!("object" == typeof Jk)) return Kk;
  var Fk = null;
  if (wk != Fk) {
    var Ik, Lk, xk, Mk, Nk, Ok, Pk, yk, zk, Qk, Rk, Ak, Bk, Ck, Dk, Gk = wk.style, Hk = Gk;
  } else Hk = Fk;
  for (Ik in Jk) {
    Lk = Jk[Ik];
    xk = k(Lk);
    if (!xk) {
      Mk = null != Hk;
      Nk = Mk;
    } else Nk = false;
    if (Nk) {
      Ok = "object" == typeof Hk;
      Pk = Ok;
    } else Pk = false;
    if (Pk) {
      yk = k(Hk[Ik]);
      Dk = yk;
    } else Dk = xk;
    if (!Dk) {
      zk = ai(Ik, vk);
      Ck = zk;
    } else Ck = Dk;
    if (!Ck) {
      Qk = null != Ek;
      Rk = Qk;
    } else Rk = false;
    if (Rk) {
      if (Ek.getValue) Ak = true;
      else Ak = Ck;
      Bk = Ak;
    } else Bk = Ck;
    if (Bk) Kk[Ik] = Lk;
  }
  return Kk;
};
export {
  ve
};
