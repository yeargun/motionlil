import { callMethod2, windowGet } from "./../motion-dom/dom-host.js";
let Zh = (vk, wk) => {
  if (null != wk) {
    var xk = "object" == typeof wk, yk = xk;
  } else yk = false;
  if (yk) callMethod2(windowGet("Object"), "assign", vk, wk);
};
export {
  Zh
};
