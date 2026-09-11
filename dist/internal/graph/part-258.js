import { callMethod1 } from "./../motion-dom/dom-host.js";
let wh = (vk) => {
  if (!callMethod1(vk, "has", "root")) return false;
  var wk = callMethod1(vk, "get", "root");
  if (!wk) return false;
  if (!("object" == typeof wk)) return false;
  for (var xk in wk) return true;
  return false;
};
export {
  wh
};
