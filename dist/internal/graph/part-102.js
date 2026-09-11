import { identity as easingFunction } from "./../motion-dom/cast-host.js";
import { isFunction } from "./../motion-dom/dom-host.js";
import { na } from "./part-37.js";
let kd = (vk) => {
  if (isFunction(vk)) return easingFunction(vk);
  if ("string" == typeof vk) return na(vk);
  if (Array.isArray(vk)) {
    var yk, xk = [], wk = 0;
    for (; wk < (vk.length | 0); wk = wk + 1) {
      yk = vk[wk];
      if ("number" == typeof yk) xk.push(yk);
    }
    return na(xk);
  }
  return na("easeInOut");
};
export {
  kd
};
