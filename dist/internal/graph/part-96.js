import { ub } from "./part-496.js";
let bg = (vk) => {
  var wk = 0;
  for (; wk < ub.length; ) {
    if (ub[wk].test(vk)) return ub[wk];
    wk += 1;
  }
  return null;
};
export {
  bg
};
