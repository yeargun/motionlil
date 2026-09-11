import { documentElement, documentGetAnimations } from "./../motion-dom/dom-host.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let vh = () => {
  var zk, vk, Bk, Ak, xk = documentGetAnimations(), yk = [], wk = 0;
  for (; wk < xk.length; wk = wk + 1) {
    zk = xk[wk];
    vk = zk.effect;
    if (!vk) continue;
    Bk = vk.target;
    Ak = vk.pseudoElement;
    if (Bk == documentElement() && "string" == typeof Ak && Ak.startsWith("::view-transition")) yk.push(zk);
  }
  return yk;
};
export {
  vh
};
