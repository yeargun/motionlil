import { Yc } from "./part-35.js";
import { Ac } from "./part-36.js";
import { yc } from "./part-467.js";
var Hg = /* @__PURE__ */ (function() {
  let a = (vk) => {
    if ("anticipate" == vk) {
      var xk, wk = true;
    } else wk = "backInOut" == vk;
    if (wk) xk = true;
    else xk = "circInOut" == vk;
    return xk;
  }, b = (vk) => {
    if ("anticipate" == vk) return Yc;
    if ("backInOut" == vk) return yc;
    return Ac;
  };
  return function(vk) {
    if (!("object" == typeof vk)) return;
    var wk = vk.ease;
    if ("string" == typeof wk && a(wk)) vk.ease = b(wk);
  };
})();
export {
  Hg
};
