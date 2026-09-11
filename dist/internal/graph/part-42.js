import { oa } from "./part-38.js";
import { g } from "./part-39.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Pb = (vk, wk) => {
  var yk = vk[vk.length - 1], xk = 1;
  for (; xk <= wk; xk = xk + 1 | 0) vk.push(/* @__PURE__ */ g(yk, 1, /* @__PURE__ */ oa(0, wk, xk)));
};
export {
  Pb
};
