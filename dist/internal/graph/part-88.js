import { h } from "./part-492.js";
import { lk } from "./part-5.js";
import { N } from "./part-75.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let gd = (vk) => {
  let wk = vk.split, xk = vk.types, yk = wk.length;
  return (Hk) => {
    var Ik, Sk, Tk, Zk, Uk, Jk, _k, Kk, Lk, Mk, Nk, Ok, Pk, Qk, $k, al, Vk, Wk, Xk, Rk = lk, Yk = 0;
    while (Yk < yk) {
      Ik = Rk + (wk[Yk] || "");
      Sk = null;
      if (Array.isArray(Hk)) {
        if (Yk < (Hk.length | 0)) {
          Tk = Hk[Yk];
          $k = true;
          Vk = Tk;
        } else {
          $k = false;
          Vk = Sk;
        }
        al = $k;
        Wk = Vk;
      } else {
        al = false;
        Wk = Sk;
      }
      if (al) {
        Zk = xk[Yk] || "";
        if ("number" == Zk) {
          if ("number" == typeof Wk) Xk = Wk;
          else {
            Uk = parseFloat(`${Wk}`);
            Xk = Uk;
          }
          Jk = Ik + `${N(Xk)}`;
          Pk = Jk;
        } else {
          if ("color" == Zk) {
            _k = h.transform;
            if (_k) {
              Kk = Ik + `${_k(Wk)}`;
              Nk = Kk;
            } else {
              Lk = Ik + `${Wk}`;
              Nk = Lk;
            }
            Ok = Nk;
          } else {
            Mk = Ik + `${Wk}`;
            Ok = Mk;
          }
          Pk = Ok;
        }
        Qk = Pk;
      } else Qk = Ik;
      Rk = Qk;
      Yk += 1;
    }
    return Rk;
  };
};
export {
  gd
};
