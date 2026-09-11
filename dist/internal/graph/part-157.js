import { ud } from "./part-153.js";
import { bc } from "./part-154.js";
import { wd } from "./part-156.js";
import { Aa } from "./part-559.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let xd = (vk, wk) => {
  if (null == vk) return null;
  if ("function" == typeof vk) return wd(vk, wk);
  if (Array.isArray(vk)) return ud(vk);
  return bc(Aa, vk);
};
export {
  xd
};
