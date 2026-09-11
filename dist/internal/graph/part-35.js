import { rb } from "./part-467.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Yc = (vk) => {
  if (vk >= 1) return 1;
  var wk = vk * 2;
  if (wk < 1) return 0.5 * rb(wk);
  return 0.5 * (2 - Math.exp(-10 * (wk - 1) * 0.6931471805599453));
};
export {
  Yc
};
