import { stringSubstring } from "./../motion-dom/string-host.js";
import { B } from "./part-74.js";
let Yf = (vk) => {
  if (vk.length > 5) {
    var Dk, Ik, Nk, xk, Ek, Jk, Ok, yk, zk, Fk, Kk, Pk, Rk, Bk, Ck = stringSubstring(vk, 1, 3), Hk = stringSubstring(vk, 3, 5), Mk = stringSubstring(vk, 5, 7), wk = stringSubstring(vk, 7, 9), Gk = Ck, Lk = Hk, Qk = Mk, Ak = wk;
  } else {
    Dk = stringSubstring(vk, 1, 2);
    Ik = stringSubstring(vk, 2, 3);
    Nk = stringSubstring(vk, 3, 4);
    xk = stringSubstring(vk, 4, 5);
    Ek = Dk + Dk;
    Jk = Ik + Ik;
    Ok = Nk + Nk;
    yk = xk + xk;
    Gk = Ek;
    Lk = Jk;
    Qk = Ok;
    Ak = yk;
  }
  if (Ak.length > 0) {
    zk = parseInt(Ak, 16) / 255;
    Bk = zk;
  } else Bk = 1;
  Fk = parseInt(Gk, 16);
  Kk = parseInt(Lk, 16);
  Pk = parseInt(Qk, 16);
  Rk = {
    red: 0,
    green: 0,
    blue: 0,
    alpha: 0
  };
  B(Rk, Fk, Kk, Pk, Bk);
  return Rk;
};
export {
  Yf
};
