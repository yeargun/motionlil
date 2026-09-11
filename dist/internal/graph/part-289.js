import { rk } from "./part-11.js";
let ke = (vk, wk) => {
  if (null == vk) return null;
  if ("string" == typeof vk) return parseFloat(vk) / rk * (wk.max - wk.min);
  if ("number" == typeof vk) return vk;
  return null;
};
export {
  ke
};
