import { rk } from "./part-11.js";
import { oe } from "./part-302.js";
import { g } from "./part-39.js";
import { H } from "./part-486.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Kh = (vk, wk = 0, Bk = 1, Ck = 0.5, Gk, Hk, Jk) => {
  var Kk = null, Mk = !Hk;
  if (Hk) {
    var xk, Dk, Ek, Ik, yk, zk, Ak, Fk, Lk = Hk;
  } else Lk = vk;
  if (Jk) Ik = Jk;
  else Ik = vk;
  if (null != wk) {
    if (H.test(wk)) {
      if ("string" == typeof wk) {
        xk = /* @__PURE__ */ g(Ik.min, Ik.max, parseFloat(wk) / rk) - Ik.min;
        Ak = xk;
      } else Ak = 0;
      yk = Ak;
    } else {
      if ("number" != typeof wk) return;
      yk = wk;
    }
    zk = yk;
  } else zk = 0;
  Dk = /* @__PURE__ */ g(Lk.min, Lk.max, Ck);
  if (Mk) {
    Ek = Dk - zk;
    Fk = Ek;
  } else Fk = Dk;
  vk.min = oe(vk.min, zk, Bk, Fk, Gk);
  vk.max = oe(vk.max, zk, Bk, Fk, Gk);
};
export {
  Kh
};
