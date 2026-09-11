import { callMethod1 } from "./../motion-dom/dom-host.js";
import { ac } from "./part-152.js";
import { za } from "./part-558.js";
let Fg = (vk) => {
  var Ak = {
    __proto__: null
  };
  for (var yk in vk) {
    if ("type" != yk) Ak[yk] = vk[yk];
  }
  var zk = vk.type;
  if (ac(zk)) {
    var wk = za(), xk = wk;
  } else xk = false;
  if (xk) return callMethod1(zk, "applyToOptions", Ak);
  return Ak;
};
export {
  Fg
};
