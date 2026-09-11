import { callMethod0 } from "./../motion-dom/dom-host.js";
import { wi } from "./part-379.js";
import { Me } from "./part-397.js";
let Ke = (vk) => {
  var wk = vk.options.visualElement;
  if (wk) callMethod0(wk, "scheduleRender");
  var xk = Me(vk);
  if (xk) wi(xk);
  var yk = vk.resumingFrom;
  if (null != yk && null == yk.instance) vk.resumingFrom = null;
};
export {
  Ke
};
