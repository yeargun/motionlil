import { zd } from "./part-167.js";
let Bd = (vk, wk) => {
  if (!vk.startsWith(wk)) return null;
  if (!vk.endsWith(")")) return null;
  return zd(vk, wk.length, vk.length - 1);
};
export {
  Bd
};
