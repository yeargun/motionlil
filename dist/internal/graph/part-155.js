import { identity as easingFunction } from "./../motion-dom/cast-host.js";
import { isFunction } from "./../motion-dom/dom-host.js";
import { ud } from "./part-153.js";
import { bc } from "./part-154.js";
import { wd } from "./part-156.js";
import { Aa } from "./part-559.js";
let vd = (vk, wk) => {
  if (!vk) return null;
  if (isFunction(vk)) return wd(easingFunction(vk), wk);
  if (Array.isArray(vk)) {
    if ("number" == typeof vk[0]) {
      var Ck, Ek, zk, Ak, Dk, Bk, yk = [], xk = 0;
      for (; xk < (vk.length | 0); xk = xk + 1) {
        Ck = vk[xk];
        if ("number" == typeof Ck) yk.push(Ck);
      }
      return ud(yk);
    }
    for (Ek = [], Dk = 0; Dk < (vk.length | 0); Dk = Dk + 1) {
      zk = vd(vk[Dk], wk);
      if (!zk) {
        Ak = Aa.easeOut;
        Bk = Ak;
      } else Bk = zk;
      Ek.push(Bk);
    }
    return Ek;
  }
  if ("string" == typeof vk) return bc(Aa, vk);
  return null;
};
export {
  vd
};
