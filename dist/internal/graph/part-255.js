import { lk } from "./part-5.js";
let lc = (vk, wk, yk) => {
  var Ak, zk = lk, xk = wk;
  for (; ; ) {
    if (xk < yk) Ak = xk < vk.length;
    else Ak = false;
    if (!Ak) {
      break;
    }
    zk += vk.charAt(xk);
    xk = xk + 1 | 0;
  }
  return zk;
};
export {
  lc
};
