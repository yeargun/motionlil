import { hasOwn } from "./../motion-dom/dom-host.js";
import { bd } from "./part-57.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let fc = (vk) => {
  if (null == vk) return false;
  if (bd(vk)) {
    var yk, zk, wk = hasOwn(vk, "offsetHeight"), xk = wk;
  } else xk = false;
  if (xk) {
    yk = !hasOwn(vk, "ownerSVGElement");
    zk = yk;
  } else zk = false;
  return zk;
};
export {
  fc
};
