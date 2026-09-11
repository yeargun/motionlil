import { X } from "./part-483.js";
import { ga } from "./part-491.js";
import { Ia } from "./part-76.js";
import { Ja } from "./part-77.js";
let Ub = (vk) => {
  if ("string" == typeof vk) return vk;
  if (Ia(vk)) {
    var wk = X.transform;
    if (wk) return wk(vk);
  }
  if (Ja(vk)) {
    var xk = ga.transform;
    if (xk) return xk(vk);
  }
  return vk;
};
export {
  Ub
};
