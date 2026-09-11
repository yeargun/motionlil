import { qf } from "./part-562.js";
let Gg = (vk) => {
  if (!("object" == typeof vk)) return;
  var wk = vk.type;
  if ("string" == typeof wk) {
    var xk = qf[wk];
    if (xk !== void 0) vk.type = xk;
  }
};
export {
  Gg
};
