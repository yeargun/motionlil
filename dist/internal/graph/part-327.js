import { Rh } from "./part-325.js";
let Th = (vk) => {
  if (Rh(vk)) {
    if (Array.isArray(vk)) {
      var Hk, wk, xk, yk, zk, Ak, Bk, Ck, Dk, Ek, Fk = vk.length > 0, Gk = Fk;
    } else Gk = false;
    if (Gk) {
      Hk = vk[(vk.length | 0) - 1];
      if ("number" == typeof Hk) xk = true;
      else {
        wk = "string" == typeof Hk;
        xk = wk;
      }
      if (xk) zk = true;
      else {
        yk = "boolean" == typeof Hk;
        zk = yk;
      }
      if (zk) Bk = true;
      else {
        Ak = Array.isArray(Hk);
        Bk = Ak;
      }
      if (Bk) Ek = true;
      else {
        if ("object" == typeof Hk) {
          Ck = !!Hk;
          Dk = Ck;
        } else Dk = false;
        Ek = Dk;
      }
      if (Ek) return Hk;
      return 0;
    }
  }
  return vk;
};
export {
  Th
};
