import { weakMapGet as weakMapGetState, weakMapSet } from "./../motion-dom/weak-host.js";
import { Ic } from "./part-575.js";
let $g = (vk) => {
  var wk = weakMapGetState(Ic, vk);
  if (wk) return wk;
  var xk = {
    latest: {},
    values: /* @__PURE__ */ new Map()
  };
  xk.latest = {
    __proto__: null
  };
  xk.values = /* @__PURE__ */ new Map();
  weakMapSet(Ic, vk, xk);
  return xk;
};
export {
  $g
};
