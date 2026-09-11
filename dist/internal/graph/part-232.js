import { weakMapGet as weakMapGetHandlers, weakMapSet } from "./../motion-dom/weak-host.js";
import { Va } from "./part-587.js";
let lh = (vk) => {
  var wk = weakMapGetHandlers(Va, vk);
  if (wk) return wk;
  var xk = [];
  weakMapSet(Va, vk, xk);
  return xk;
};
export {
  lh
};
