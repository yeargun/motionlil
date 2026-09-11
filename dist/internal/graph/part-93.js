import { rk } from "./part-11.js";
import { B } from "./part-74.js";
import { Vb } from "./part-92.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let ag = (vk) => {
  var Hk = vk.hue / 360, Ak = vk.saturation / rk, wk = vk.lightness / rk;
  if (0 == Ak) {
    var Bk, Ck, Jk, Lk, xk, Nk, Dk, yk, Ik, Ek, Kk, Mk, Gk, zk = wk, Ok = wk, Fk = wk;
  } else {
    if (wk < 0.5) {
      Bk = wk * (1 + Ak);
      Gk = Bk;
    } else {
      Ck = wk + Ak - wk * Ak;
      Gk = Ck;
    }
    Jk = 2 * wk - Gk;
    Lk = 0.3333333333333333;
    xk = Vb(Jk, Gk, Hk + Lk);
    Nk = Vb(Jk, Gk, Hk);
    Dk = Vb(Jk, Gk, Hk - Lk);
    zk = xk;
    Ok = Nk;
    Fk = Dk;
  }
  yk = Math.round(zk * 255);
  Ik = Math.round(Ok * 255);
  Ek = Math.round(Fk * 255);
  Kk = vk.alpha;
  Mk = {
    red: 0,
    green: 0,
    blue: 0,
    alpha: 0
  };
  B(Mk, yk, Ik, Ek, Kk);
  return Mk;
};
export {
  ag
};
