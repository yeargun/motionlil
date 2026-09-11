import { l } from "./part-0.js";
import { C } from "./part-111.js";
import { ra } from "./part-276.js";
import { oc } from "./part-282.js";
import { sa } from "./part-287.js";
import { qc } from "./part-291.js";
let Ai = (vk, wk, Ik, Kk) => {
  var Mk = C();
  if (Kk) ra(Mk, Kk);
  else ra(Mk, wk);
  var Nk, xk, yk, zk, Ak, Bk, Ok, Qk, Rk, Ck, Pk, Dk, Ek, Jk, Fk, Gk, Hk, Lk = 0;
  for (; Lk < vk.path.length; Lk = Lk + 1) {
    Nk = vk.path[Lk];
    if (!Ik) {
      xk = !!Nk.options.layoutScroll;
      yk = xk;
    } else yk = false;
    if (yk) {
      zk = Nk.root != Nk;
      Ak = zk;
    } else Ak = false;
    if (Ak) {
      Bk = Nk.scroll;
      if (null != Bk) {
        Ok = Bk.offset;
        Qk = Mk.x;
        sa(Qk, -l(Ok.x));
        Rk = Mk.y;
        sa(Rk, -l(Ok.y));
      }
    }
    if (!oc(Nk.latestValues)) continue;
    Ck = null;
    Pk = Nk.layout;
    if (Pk) {
      Dk = Pk.layoutBox;
      Gk = Dk;
    } else Gk = Ck;
    qc(Mk, Nk.latestValues, Gk);
  }
  if (oc(vk.latestValues)) {
    Ek = null;
    Jk = vk.layout;
    if (Jk) {
      Fk = Jk.layoutBox;
      Hk = Fk;
    } else Hk = Ek;
    qc(Mk, vk.latestValues, Hk);
  }
  return Mk;
};
export {
  Ai
};
