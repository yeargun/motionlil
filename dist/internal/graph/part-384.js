import { ui } from "./part-375.js";
let ob = (vk, wk) => {
  if (!vk) return;
  var yk, Bk, zk, xk = vk, Ck = xk.length, Ak = 1;
  for (; Ak < Ck; Ak = Ak + 1) {
    for (Bk = xk[Ak], zk = Ak - 1; zk >= 0; ) {
      if (ui(xk[zk], Bk) <= 0) break;
      xk[zk + 1] = xk[zk];
      zk -= 1;
    }
    xk[zk + 1] = Bk;
  }
  for (yk = 0; yk < vk.length; yk = yk + 1) wk(vk[yk]);
};
export {
  ob
};
