import { cf } from "./part-472.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let ed = (vk) => {
  if (null == vk) return false;
  if (!("string" == typeof vk)) return false;
  if (!vk.startsWith("var(--")) return false;
  return !!(vk.split("/*")[0] || "").trim().match(cf);
};
export {
  ed
};
