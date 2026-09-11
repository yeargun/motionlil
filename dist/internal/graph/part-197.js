import { b } from "./part-541.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Xg = (vk, wk) => {
  var yk, zk, Ak, xk = 0;
  for (; xk < vk.length; xk = xk + 1) {
    yk = vk[xk];
    if ("number" == typeof yk) {
      zk = b.has(wk);
      Ak = zk;
    } else Ak = false;
    if (Ak) vk[xk] = `${yk}px`;
  }
};
export {
  Xg
};
