import { getComputedStyleProperty, getComputedStyleValue } from "./../motion-dom/dom-host.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Rd = (vk, wk) => {
  if (wk.startsWith("--")) return getComputedStyleProperty(vk, wk);
  var xk = getComputedStyleValue(vk)[wk];
  if ("string" == typeof xk) return xk;
  return `${xk}`;
};
export {
  Rd
};
