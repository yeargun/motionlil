import { hasOwn } from "./../motion-dom/dom-host.js";
import { bd } from "./part-57.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let jc = (vk) => {
  if (null == vk) return false;
  if (bd(vk)) {
    var wk = hasOwn(vk, "ownerSVGElement"), xk = wk;
  } else xk = false;
  return xk;
};
export {
  jc
};
