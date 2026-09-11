import { ea } from "./part-468.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Rb = (vk) => {
  var zk, Ak, wk, Bk, yk = vk(0), xk = 0, Ck = yk;
  for (; ; ) {
    if (!Ck.done) {
      zk = xk < ea;
      Ak = zk;
    } else Ak = false;
    if (!Ak) {
      break;
    }
    wk = xk + 50;
    Bk = vk(wk);
    xk = wk;
    Ck = Bk;
  }
  if (xk >= ea) return ea;
  return xk;
};
export {
  Rb
};
