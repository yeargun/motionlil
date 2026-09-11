import { Mc } from "./part-612.js";
let vc = (vk) => {
  if (null == vk) return null;
  if (!vk) return null;
  var wk = vk.id;
  if ("number" == typeof wk) return Mc.get(wk | 0) ?? null;
  return null;
};
export {
  vc
};
