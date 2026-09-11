import { mapKeys } from "./../motion-dom/dom-host.js";
import { Pe } from "./part-408.js";
import { Se } from "./part-416.js";
import { $m145$GroupAnimationWithThen } from "./part-446.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let gk = (vk, yk) => {
  var zk, Ek, Fk, Gk, wk, Ak, Bk = [], Ck = Pe(vk, yk, null), Dk = mapKeys(Ck), xk = 0;
  for (; xk < Dk.length; xk = xk + 1) {
    zk = Dk[xk];
    Ek = Ck.get(zk);
    if (Ek) for (Fk = Ek, Gk = Se(zk, Fk.keyframes, Fk.transition), Ak = 0; Ak < Gk.length; Ak = Ak + 1) Bk.push(Gk[Ak]);
  }
  wk = new $m145$GroupAnimationWithThen(Bk);
  return wk;
};
export {
  gk
};
