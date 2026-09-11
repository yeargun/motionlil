import { vc } from "./part-380.js";
import { Me } from "./part-397.js";
let Le = (vk) => {
  if ("string" == typeof vk.options.layoutId) {
    var wk = Me(vk);
    if (wk) {
      var xk = vc(wk.lead);
      if (xk) return xk;
    }
  }
  return vk;
};
export {
  Le
};
