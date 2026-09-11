import { Z } from "./part-361.js";
import { Tb } from "./part-71.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Vj = (vk) => {
  var wk, xk, zk = Object.keys(vk), yk = 0;
  for (; yk < zk.length; yk = yk + 1) {
    wk = zk[yk] || "";
    xk = vk[wk];
    if (xk) {
      Z[wk] = xk;
      if (Tb(wk)) xk.isCSSVariable = true;
    }
  }
};
export {
  Vj
};
