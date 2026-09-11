import { weakMapGet as weakMapGetHandlerSet, weakMapSet } from "./../motion-dom/weak-host.js";
import { Lb } from "./part-630.js";
let Ni = (vk) => {
  var wk = weakMapGetHandlerSet(Lb, vk);
  if (wk) return wk;
  var xk = {
    inner: []
  };
  xk.inner = [];
  weakMapSet(Lb, vk, xk);
  return xk;
};
export {
  Ni
};
