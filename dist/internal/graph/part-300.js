import { ua } from "./part-294.js";
import { g } from "./part-39.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let ne = (vk, wk, xk, yk = 0) => {
  var zk = xk.min;
  if (0 != yk) {
    var Ak = /* @__PURE__ */ g(xk.min, xk.max, yk), Bk = Ak;
  } else Bk = zk;
  vk.min = wk.min - Bk;
  vk.max = vk.min + ua(wk);
};
export {
  ne
};
