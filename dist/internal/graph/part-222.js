import { getElementTagName } from "./../motion-dom/dom-host.js";
import { ia } from "./part-583.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let hh = (vk) => {
  var yk = getElementTagName(vk), wk = vk.isContentEditable;
  if (ia.has(yk)) {
    var xk = true;
  } else xk = wk;
  return xk;
};
export {
  hh
};
