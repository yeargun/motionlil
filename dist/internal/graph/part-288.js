import { pc } from "./part-285.js";
import { g } from "./part-39.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let je = (vk, wk, yk, Ak, Bk = 0.5) => {
  var Ck = /* @__PURE__ */ g(vk.min, vk.max, Bk);
  if (null != wk) {
    var zk, xk = wk;
  } else xk = 0;
  if (null != yk) zk = yk;
  else zk = 1;
  pc(vk, xk, zk, Ck, Ak);
};
export {
  je
};
