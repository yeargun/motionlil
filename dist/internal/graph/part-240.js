import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let qh = (vk, wk) => {
  if ("string" == typeof vk) {
    if ("first" == vk) return 0;
    var xk = wk - 1 | 0;
    if ("last" == vk) return xk;
    return xk / 2;
  }
  return vk;
};
export {
  qh
};
