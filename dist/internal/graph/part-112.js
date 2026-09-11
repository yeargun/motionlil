import { l } from "./part-0.js";
let jg = (vk) => {
  if ("number" == typeof vk) return true;
  if ("string" == typeof vk) {
    var wk = l(vk);
    return wk == wk;
  }
  return false;
};
export {
  jg
};
