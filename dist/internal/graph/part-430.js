import { documentScrollingElement, isFunction } from "./../motion-dom/dom-host.js";
import { Si } from "./part-428.js";
import { Ti } from "./part-429.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let dk = (vk, wk) => {
  var xk = documentScrollingElement(), Ak = {
    __proto__: null
  };
  if (null != wk) {
    var Hk, Dk, Ek, Ik, Fk, Gk, yk, zk, Bk = "object" == typeof wk, Ck = Bk;
  } else Ck = false;
  if (Ck) {
    Hk = wk;
    for (Dk in Hk) Ak[Dk] = wk[Dk];
    Ek = wk.axis;
    if ("string" == typeof Ek) Fk = Ek;
    else Fk = "y";
    Ik = wk.container;
    if (null != Ik) yk = Ik;
    else yk = xk;
    Gk = Fk;
    zk = yk;
  } else {
    Gk = "y";
    zk = xk;
  }
  if (null == zk) return () => {
  };
  Ak.axis = Gk;
  Ak.container = zk;
  if (isFunction(vk)) return Ti(vk, Ak);
  return Si(vk, Ak);
};
export {
  dk
};
