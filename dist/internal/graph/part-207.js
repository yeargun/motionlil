import { hasOwn } from "./../motion-dom/dom-host.js";
let ah = (vk, wk) => {
  if (!hasOwn(vk, wk)) return false;
  return true;
};
export {
  ah
};
