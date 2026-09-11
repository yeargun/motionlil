import { getComputedStyleField } from "./../motion-dom/dom-host.js";
import { cc } from "./part-174.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Mg = (vk, yk) => {
  var wk = getComputedStyleField(vk, "transform");
  if ("string" == typeof wk) {
    var xk = wk;
  } else xk = "none";
  return cc(xk, yk);
};
export {
  Mg
};
