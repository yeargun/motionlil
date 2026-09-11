import { getElementTagName } from "./../motion-dom/dom-host.js";
import { Ua } from "./part-584.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Bj = (vk) => {
  var yk = getElementTagName(vk), wk = vk.isContentEditable;
  if (Ua.has(yk)) {
    var xk = true;
  } else xk = wk;
  return xk;
};
export {
  Bj
};
