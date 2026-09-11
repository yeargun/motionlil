import { hasWindow, windowGet } from "./../motion-dom/dom-host.js";
import { lk } from "./part-5.js";
let Ce = (vk) => {
  if (!hasWindow()) return false;
  var wk = windowGet("navigator").userAgent;
  if ("string" == typeof wk) {
    var xk = wk.toLowerCase(), yk = xk;
  } else yk = lk;
  return yk.includes(vk);
};
export {
  Ce
};
