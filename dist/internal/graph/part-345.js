import { k } from "./part-120.js";
import { ve } from "./part-338.js";
import { ei } from "./part-344.js";
import { p } from "./part-521.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let fi = (vk, wk, Ak) => {
  var Ck = {
    __proto__: null
  };
  if (null != wk) {
    var Bk, xk, Ek, Fk, Gk, Hk, yk, zk, Dk = wk;
  } else Dk = Ck;
  Bk = ve(vk, Dk, Ak);
  for (xk in vk) {
    Ek = vk[xk];
    Fk = Dk[xk];
    if (k(Ek)) Hk = true;
    else {
      Gk = k(Fk);
      Hk = Gk;
    }
    if (Hk) {
      if (p.indexOf(xk) != -1) {
        yk = "attr" + ei(xk);
        zk = yk;
      } else zk = xk;
      Bk[zk] = Ek;
    }
  }
  return Bk;
};
export {
  fi
};
