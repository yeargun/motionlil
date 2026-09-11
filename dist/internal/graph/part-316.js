import { z } from "./part-522.js";
import { xf } from "./part-595.js";
import { yf } from "./part-596.js";
import { zf } from "./part-597.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Mh = (vk, Ck) => {
  var Fk = Ck.keyframes;
  if (Array.isArray(Fk)) {
    var Gk, wk, xk, Hk, Ik, yk, zk, Ak, Bk, Dk = Fk.length, Ek = Dk;
  } else Ek = 0;
  if (Ek > 2) return yf;
  if (z.has(vk)) {
    if (vk.startsWith("scale")) {
      Gk = null;
      if (Array.isArray(Fk)) {
        wk = Fk.length > 1;
        xk = wk;
      } else xk = false;
      if (xk) {
        Hk = Fk[1];
        Ik = Hk;
      } else Ik = Gk;
      if ("number" == typeof Ik) {
        yk = 0 == Ik;
        zk = yk;
      } else zk = false;
      if (zk) Ak = 46.9041575982343;
      else Ak = 30;
      Bk = {
        __proto__: null,
        type: "spring",
        stiffness: 550,
        damping: Ak,
        restSpeed: 10
      };
      return Bk;
    }
    return xf;
  }
  return zf;
};
export {
  Mh
};
