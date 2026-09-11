import { t } from "./part-598.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Nh = (vk) => {
  if (!("object" == typeof vk)) return false;
  for (var wk in vk) {
    if (!t.has(wk)) return true;
  }
  return false;
};
export {
  Nh
};
