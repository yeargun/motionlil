import { Qi } from "./part-426.js";
let qb = (vk, xk) => {
  var yk = Qi(vk);
  if (!yk) return false;
  var zk, Ak, Bk, Ck, wk = 0;
  for (; wk < 2; wk = wk + 1) {
    zk = yk[wk];
    Ak = xk[wk];
    if (zk[0] != Ak[0]) Ck = true;
    else {
      Bk = zk[1] != Ak[1];
      Ck = Bk;
    }
    if (Ck) return false;
  }
  return true;
};
export {
  qb
};
