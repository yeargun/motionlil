import { Fa } from "./part-18.js";
import { Vc } from "./part-29.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Ga = (vk, wk, xk, yk) => {
  if (vk == wk) {
    var zk = xk == yk;
  } else zk = false;
  if (zk) return Fa;
  return (Jk) => {
    if (0 == Jk) {
      var Nk, Pk, Lk, Rk, Tk, Mk, Uk, Ok, Qk, Sk, Vk, Kk = true;
    } else Kk = 1 == Jk;
    if (Kk) return Jk;
    Nk = 0;
    Pk = 1;
    Lk = 0;
    Rk = 0;
    Tk = true;
    while (Tk) {
      Mk = Nk + (Pk - Nk) / 2;
      Uk = Vc(Mk, vk, xk) - Jk;
      if (Uk > 0) {
        Ok = Nk;
        Qk = Mk;
      } else {
        Ok = Mk;
        Qk = Pk;
      }
      Sk = Rk + 1 | 0;
      if (Math.abs(Uk) > 1e-7) Vk = Sk < 12;
      else Vk = false;
      Nk = Ok;
      Pk = Qk;
      Lk = Mk;
      Rk = Sk;
      Tk = Vk;
    }
    return Vc(Lk, wk, yk);
  };
};
export {
  Ga
};
