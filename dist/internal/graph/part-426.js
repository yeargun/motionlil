import { Pi } from "./part-425.js";
let Qi = (vk) => {
  if (!Array.isArray(vk)) {
    var wk, Ck, yk, Ek, Fk, zk, Ak, Bk, Dk, xk = true;
  } else {
    wk = 2 != (vk.length | 0);
    xk = wk;
  }
  if (xk) return null;
  for (Ck = [], Dk = 0; Dk < 2; Dk = Dk + 1) {
    yk = vk[Dk];
    if (Array.isArray(yk)) {
      Ek = yk[0];
      Fk = yk[1];
      if ("number" == typeof Ek) {
        zk = "number" == typeof Fk;
        Ak = zk;
      } else Ak = false;
      if (Ak) Ck.push([Ek, Fk]);
      else return null;
    } else {
      if ("string" == typeof yk) {
        Bk = Pi(yk);
        if (!Bk) return null;
        Ck.push(Bk);
      } else return null;
    }
  }
  return Ck;
};
export {
  Qi
};
