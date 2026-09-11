import { isFunction } from "./../motion-dom/dom-host.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let ng = (vk) => {
  if (null == vk) return false;
  if (!("object" == typeof vk)) return false;
  return isFunction(vk.start);
};
export {
  ng
};
