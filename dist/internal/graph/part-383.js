import { vc } from "./part-380.js";
let De = (vk) => {
  if (!vk) return null;
  var wk = vc(vk.node);
  if (wk) return wk;
  return vc(vk);
};
export {
  De
};
