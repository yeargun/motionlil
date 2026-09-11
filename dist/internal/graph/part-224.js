import { createPointerEvent, dispatchEvent } from "./../motion-dom/dom-host.js";
let hc = (vk, wk) => {
  let xk = {
    __proto__: null
  };
  xk.isPrimary = true;
  xk.bubbles = true;
  dispatchEvent(vk, createPointerEvent("pointer" + wk, xk));
};
export {
  hc
};
