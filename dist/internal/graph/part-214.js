import { lk } from "./part-5.js";
let eh = (vk) => {
  if (!vk.startsWith("attr")) {
    var Ck, xk, yk, zk, Ak, Bk, wk = true;
  } else wk = vk.length < 5;
  if (wk) return vk;
  for (Ak = lk, Bk = 4; Bk < vk.length; ) {
    Ck = vk.charAt(Bk);
    if (4 == Bk) {
      xk = Ck.toLowerCase();
      zk = xk;
    } else {
      yk = Ak + Ck;
      zk = yk;
    }
    Ak = zk;
    Bk += 1;
  }
  return Ak;
};
export {
  eh
};
