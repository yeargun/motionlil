import { isFunction, windowGet } from "./../motion-dom/dom-host.js";
import { E } from "./part-205.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let bk = (vk, yk, zk) => {
  var Ak = windowGet("document");
  if (isFunction(vk)) return {
    __proto__: null,
    scope: Ak,
    updateDom: vk,
    defaultOptions: yk
  };
  if (vk == Ak) {
    var Dk, wk, Bk, Ck, xk = vk;
  } else {
    Dk = null;
    wk = E(vk, Dk, Dk);
    if (wk.length > 0) {
      Bk = wk[0];
      Ck = Bk;
    } else Ck = Ak;
    xk = Ck;
  }
  return {
    __proto__: null,
    scope: xk,
    updateDom: yk,
    defaultOptions: zk
  };
};
export {
  bk
};
