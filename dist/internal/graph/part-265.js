import { callMethod0, getComputedStyleProperty, isFunction, mapKeys } from "./../motion-dom/dom-host.js";
import { A } from "./part-572.js";
let ae = (vk, wk) => {
  var xk, Ak, Ek, Mk, Fk, Nk, Gk, Hk, yk, Ik, Bk, Ck, zk, Jk, Dk, Lk = mapKeys(vk[0]), Kk = 0;
  for (; Kk < Lk.length; Kk = Kk + 1) {
    xk = Lk[Kk];
    Ak = vk[0].get(xk);
    if (Ak !== void 0) {
      Ek = Ak;
      if (isFunction(xk.getBoundingClientRect)) {
        Mk = callMethod0(xk, "getBoundingClientRect");
        Fk = Mk.height;
        if ("number" == typeof Fk && 0 != Fk) {
          for (Nk = {
            __proto__: null
          }, Ck = 0; Ck < A.length; Ck = Ck + 1) {
            Gk = A[Ck] || "";
            Nk[Gk] = getComputedStyleProperty(xk, Gk);
          }
          Hk = vk[12].get(Ek);
          yk = {
            oldBox: null,
            newBox: null
          };
          Dk = null;
          yk.oldBox = Dk;
          yk.newBox = Dk;
          if (Hk) zk = Hk;
          else zk = yk;
          Ik = Mk.width;
          if ("number" == typeof Ik) Jk = Ik;
          else Jk = 0;
          Bk = {
            width: 0,
            height: 0,
            radii: {}
          };
          Bk.width = Jk;
          Bk.height = Fk;
          Bk.radii = Nk;
          if ("old" == wk) zk.oldBox = Bk;
          else zk.newBox = Bk;
          if (!vk[12].has(Ek)) vk[13].push(Ek);
          vk[12].set(Ek, zk);
        }
      }
    }
  }
};
export {
  ae
};
