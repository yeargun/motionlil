import { lk } from "./part-5.js";
let zd = (vk, wk, zk) => {
  var Bk = vk.length;
  if (wk < 0) {
    var Ck, Dk, Ak, yk, xk = 0;
  } else xk = wk;
  if (zk > Bk) Ak = Bk;
  else Ak = zk;
  for (Dk = lk, yk = xk; yk < Ak; ) {
    Ck = Dk + vk.charAt(yk);
    Dk = Ck;
    yk = yk + 1 | 0;
  }
  return Dk;
};
export {
  zd
};
