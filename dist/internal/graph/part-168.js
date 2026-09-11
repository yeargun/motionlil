import { zd } from "./part-167.js";
let Ad = (vk) => {
  var Bk, Fk, Gk, Ck, zk, Dk, Hk, Ik, Ek, xk, yk, wk = vk.length, Ak = 0;
  for (; Ak < wk; ) {
    Bk = vk.charCodeAt(Ak) | 0;
    if (32 == Bk) Fk = true;
    else Fk = 9 == Bk;
    if (Fk) Gk = true;
    else Gk = 10 == Bk;
    if (Gk) Ck = true;
    else Ck = 13 == Bk;
    if (Ck) zk = Ak + 1;
    else break;
    Ak = zk;
  }
  for (yk = wk; yk > Ak; ) {
    Dk = vk.charCodeAt(yk - 1) | 0;
    if (32 == Dk) Hk = true;
    else Hk = 9 == Dk;
    if (Hk) Ik = true;
    else Ik = 10 == Dk;
    if (Ik) Ek = true;
    else Ek = 13 == Dk;
    if (Ek) xk = yk - 1;
    else break;
    yk = xk;
  }
  return zd(vk, Ak, yk);
};
export {
  Ad
};
