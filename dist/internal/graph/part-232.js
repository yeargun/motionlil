import { weakMapGet as weakMapGetHandlers, weakMapSet } from "./../motion-dom/weak-host.js";
import { Wa } from "./part-587.js";
let lh = (vk) => {
  var wk = weakMapGetHandlers(Wa, vk);
  if (wk) return wk;
  var xk = [];
  weakMapSet(Wa, vk, xk);
  return xk;
};
export {
  lh
};
