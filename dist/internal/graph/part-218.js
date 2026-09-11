import { Od } from "./part-215.js";
let fh = (vk) => {
  var wk = vk.pointerType;
  if ("string" == typeof wk && "touch" == wk) return false;
  if (Od()) return false;
  return true;
};
export {
  fh
};
