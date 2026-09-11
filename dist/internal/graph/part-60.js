import { Uf } from "./part-59.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Ha = (vk) => {
  let wk = [false, null];
  Uf(wk);
  return () => {
    if (!wk[0]) {
      wk[1] = vk();
      wk[0] = true;
    }
    var Ck = wk[1];
    if (null != Ck) return Ck;
    return vk();
  };
};
export {
  Ha
};
