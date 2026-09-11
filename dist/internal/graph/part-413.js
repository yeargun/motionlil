import { callFn0, isFunction } from "./../motion-dom/dom-host.js";
let Qe = (vk) => {
  var wk = vk.onComplete;
  if (isFunction(wk)) {
    vk.onComplete = null;
    return () => {
      callFn0(wk);
    };
  }
  return null;
};
export {
  Qe
};
