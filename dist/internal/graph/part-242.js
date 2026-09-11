import { Ob } from "./part-41.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Td = (vk, wk, xk) => {
  var yk = null;
  if (xk) {
    var Bk = xk.ease, Ek = xk.clampValues, zk = {
      clampValues: false,
      ease: null
    };
    zk.clampValues = Ek;
    zk.ease = Bk;
    var Ak = zk;
  } else Ak = yk;
  return Ob(vk, wk, Ak);
};
export {
  Td
};
