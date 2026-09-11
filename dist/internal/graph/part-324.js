import { callMethod0 } from "./../motion-dom/dom-host.js";
import { rg } from "./part-128.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let tc = (vk, wk, xk) => {
  var Ak = callMethod0(vk, "getProps");
  if (null == xk) {
    var yk = Ak.custom, zk = yk;
  } else zk = xk;
  return rg(Ak, wk, zk, vk);
};
export {
  tc
};
