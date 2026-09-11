import { tc } from "./part-324.js";
import { Sh } from "./part-326.js";
import { Th } from "./part-327.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Uh = (vk, wk) => {
  var Bk = null, xk = tc(vk, wk, Bk), Ak = {
    __proto__: null
  };
  if (xk != Bk) {
    var Gk, Ek, Hk, Ik, Fk, yk, zk, Ck = "object" == typeof xk, Dk = Ck;
  } else Dk = false;
  if (Dk) {
    Gk = xk;
    for (Ek in Gk) {
      if ("transition" != Ek) {
        Hk = "transitionEnd" != Ek;
        Ik = Hk;
      } else Ik = false;
      if (Ik) Ak[Ek] = xk[Ek];
    }
    Fk = xk.transitionEnd;
    if ("object" == typeof Fk) for (yk in Fk) Ak[yk] = Fk[yk];
  }
  for (zk in Ak) Sh(vk, zk, Th(Ak[zk]));
};
export {
  Uh
};
