import { h } from "./part-492.js";
let _f = (vk) => {
  if ("number" == typeof vk) return 0;
  if ("string" == typeof vk && h.test(vk)) {
    var wk = h.getAnimatableNone;
    if (wk) return wk(vk);
  }
  return vk;
};
export {
  _f
};
