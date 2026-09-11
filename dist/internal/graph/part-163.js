import { rf } from "./part-564.js";
let Ig = (vk) => {
  var xk, wk = 0;
  for (; wk < vk.length; wk = wk + 1) {
    xk = vk[wk];
    if ("string" == typeof xk && rf.test(xk)) return true;
  }
  return false;
};
export {
  Ig
};
