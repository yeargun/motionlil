import { Ad } from "./part-168.js";
import { lk } from "./part-5.js";
let Lg = (vk) => {
  var Ak, wk, yk = [], Bk = vk.length, xk = lk, zk = 0;
  for (; zk < Bk; ) {
    Ak = vk.charAt(zk);
    if ("," == Ak) {
      yk.push(parseFloat(Ad(xk)));
      wk = lk;
    } else wk = xk + Ak;
    xk = wk;
    zk += 1;
  }
  if (xk.length > 0) yk.push(parseFloat(Ad(xk)));
  return yk;
};
export {
  Lg
};
