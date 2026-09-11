import { identity as asMotionValue, identity as asVisualElement } from "./../motion-dom/cast-host.js";
import { Ma } from "./part-146.js";
import { Cb } from "./part-548.js";
let Ng = (vk) => {
  var zk, wk, Ak, xk, Bk, Ck, Dk, Ek, Fk, Gk, Hk, Ik, Jk, yk, Mk, Lk = [], Nk = asVisualElement(vk), Kk = 0;
  for (; Kk < Cb.length; Kk = Kk + 1) {
    zk = Cb[Kk] || "";
    wk = null;
    Ak = Ma(Nk, zk, wk, false);
    if (Ak == wk) continue;
    Mk = asMotionValue(Ak);
    xk = Mk.get();
    if ("number" == typeof xk) Ck = true;
    else {
      Bk = "string" == typeof xk;
      Ck = Bk;
    }
    if (Ck) Ek = true;
    else {
      Dk = "boolean" == typeof xk;
      Ek = Dk;
    }
    if (Ek) Gk = true;
    else {
      Fk = Array.isArray(xk);
      Gk = Fk;
    }
    if (Gk) Jk = true;
    else {
      if ("object" == typeof xk) {
        Hk = !!xk;
        Ik = Hk;
      } else Ik = false;
      Jk = Ik;
    }
    if (Jk) {
      Lk.push([zk, xk]);
      if (zk.startsWith("scale")) yk = 1;
      else yk = 0;
      Mk.set(yk);
    }
  }
  return Lk;
};
export {
  Ng
};
