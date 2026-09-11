import { _f } from "./part-90.js";
let $f = (vk, wk) => {
  if ("number" == typeof vk) {
    if (wk.trim().endsWith("/")) return vk;
    return 0;
  }
  return _f(vk);
};
export {
  $f
};
