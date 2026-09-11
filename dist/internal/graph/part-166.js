import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let yd = (vk) => {
  var wk = 1;
  for (; wk < vk.length; wk = wk + 1) {
    if (vk[wk] == null) vk[wk] = vk[wk - 1];
  }
};
export {
  yd
};
