import { rk } from "./part-11.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let ye = (vk, wk) => {
  if (wk.max == wk.min) return 0;
  return vk / (wk.max - wk.min) * rk;
};
export {
  ye
};
