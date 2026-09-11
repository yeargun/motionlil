import { hasFunction } from "./../motion-dom/dom-host.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let k = (vk) => {
  if (null == vk) return false;
  if (!vk) return false;
  return hasFunction(vk, "getVelocity");
};
export {
  k
};
