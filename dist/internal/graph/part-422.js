import { documentScrollingElement } from "./../motion-dom/dom-host.js";
import { hk } from "./part-1.js";
let Ve = (vk) => {
  if (vk == documentScrollingElement()) return hk;
  return vk;
};
export {
  Ve
};
