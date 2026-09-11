import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let kb = (vk, wk) => {
  if (wk) {
    var xk = wk.transform;
    if (xk) return xk(vk);
  }
  return vk;
};
export {
  kb
};
