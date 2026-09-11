import { getElementTagName } from "./../motion-dom/dom-host.js";
import { jc } from "./part-229.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let ph = (vk) => {
  if (!jc(vk)) return false;
  return "svg" == getElementTagName(vk).toLowerCase();
};
export {
  ph
};
