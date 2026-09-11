import { callMethod2, isFunction, mapKeys } from "./../motion-dom/dom-host.js";
import { D } from "./part-113.js";
import { Pe } from "./part-408.js";
import { Hi } from "./part-409.js";
let Ii = (vk, xk, Ak) => {
  var Ok = [], Dk = [];
  if (Array.isArray(vk)) {
    var Bk, Fk, Gk, Hk, Ik, Pk, Jk, Qk, Rk, Ck, Ek, yk, Kk, Lk, Mk, wk, zk, Sk = vk.length | 0, Nk = 0;
    for (; Nk < Sk; Nk = Nk + 1) {
      Bk = vk[Nk];
      if (Array.isArray(Bk)) {
        Fk = (Bk.length | 0) > 0;
        Gk = Fk;
      } else Gk = false;
      if (Gk) {
        Hk = isFunction(Bk[0]);
        Ik = Hk;
      } else Ik = false;
      if (Ik) {
        Pk = Bk[0];
        Jk = D(0, null);
        callMethod2(Jk, "on", "change", Pk);
        Qk = Bk.length | 0;
        if (1 == Qk) Dk.push([Jk, [0, 1]]);
        else {
          if (2 == Qk) Dk.push([Jk, [0, 1], Bk[1]]);
          else {
            Rk = Bk[1];
            Dk.push([Jk, Rk, Bk[2]]);
          }
        }
      } else Dk.push(Bk);
    }
  }
  for (Ck = Pe(Dk, xk, Ak), Ek = mapKeys(Ck), wk = 0; wk < Ek.length; wk = wk + 1) {
    yk = Ek[wk];
    Kk = Ck.get(yk);
    if (Kk) for (Lk = Kk, Mk = Hi(yk, Lk.keyframes, Lk.transition, Ak), zk = 0; zk < Mk.length; zk = zk + 1) Ok.push(Mk[zk]);
  }
  return Ok;
};
export {
  Ii
};
