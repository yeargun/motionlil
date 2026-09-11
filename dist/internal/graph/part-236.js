import { rk } from "./part-11.js";
import { f } from "./part-455.js";
import { F } from "./part-456.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Sd = (vk, wk) => {
  let xk = [null];
  xk[0] = null;
  let yk = (Rk) => {
    var Sk = null;
    if ("object" == typeof wk) {
      var Jk, Kk, Lk, Vk, Mk, Nk, Ok, Pk, Tk = wk.currentTime, Uk = Tk;
    } else Uk = Sk;
    if (null != Uk) {
      Jk = "object" == typeof Uk;
      Kk = Jk;
    } else Kk = false;
    if (Kk) {
      Lk = Uk.value;
      if ("number" == typeof Lk) Ok = Lk;
      else Ok = 0;
      Pk = Ok;
    } else Pk = 0;
    Vk = Pk / rk;
    if (null == xk[0]) Nk = true;
    else {
      Mk = xk[0] != Vk;
      Nk = Mk;
    }
    if (Nk) vk(Vk);
    xk[0] = Vk;
  };
  f.preUpdate(yk, true, false);
  return () => {
    F(yk);
  };
};
export {
  Sd
};
