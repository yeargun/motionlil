import { bc } from "./part-154.js";
import { za } from "./part-558.js";
import { Aa } from "./part-559.js";
import { Xf } from "./part-70.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Yg = (vk) => {
  if (null == vk) return true;
  if ("string" == typeof vk) {
    if (null != bc(Aa, vk)) {
      var wk, zk, yk, xk = true;
    } else {
      wk = za();
      xk = wk;
    }
    return xk;
  }
  if (Xf(vk)) return true;
  if (Array.isArray(vk)) {
    for (zk = vk.length, yk = 0; yk < (zk | 0); yk = yk + 1) {
      if (!Yg(vk[yk])) return false;
    }
    return true;
  }
  if (vk) return za();
  return false;
};
export {
  Yg
};
