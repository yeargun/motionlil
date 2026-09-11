import { lk } from "./part-5.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let jb = (vk) => {
  var Bk, Ck, Dk, wk, xk, yk, Ek = vk.length, zk = lk, Ak = 0;
  for (; Ak < Ek; ) {
    Bk = vk.charAt(Ak);
    Ck = vk.charCodeAt(Ak) | 0;
    if (Ck >= 65) Dk = Ck <= 90;
    else Dk = false;
    if (Dk) {
      wk = zk + "-" + Bk.toLowerCase();
      yk = wk;
    } else {
      xk = zk + Bk;
      yk = xk;
    }
    zk = yk;
    Ak += 1;
  }
  return zk;
};
export {
  jb
};
