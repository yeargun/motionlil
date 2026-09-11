import { xd } from "./part-157.js";
import { Aa } from "./part-559.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let yj = (vk, wk) => {
  var zk, xk = [], yk = 0;
  for (; yk < vk.length; yk = yk + 1) {
    zk = xd(vk[yk], wk);
    if (null != zk) xk.push(zk);
    else xk.push(Aa.easeOut);
  }
  return xk;
};
export {
  yj
};
