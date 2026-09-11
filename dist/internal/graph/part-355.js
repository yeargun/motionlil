import { mi } from "./part-352.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Tj = (vk, wk) => {
  if ("string" == typeof wk) return wk != vk;
  if (Array.isArray(wk)) {
    if (Array.isArray(vk)) return !mi(wk, vk);
    return true;
  }
  return false;
};
export {
  Tj
};
