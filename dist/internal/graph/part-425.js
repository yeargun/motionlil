import { Oi } from "./part-424.js";
import { Ea } from "./part-633.js";
let Pi = (vk) => {
  Oi();
  var wk = vk.trim().split(" ");
  if (2 != wk.length) return null;
  var zk = Ea.get(wk[0] || ""), Ak = Ea.get(wk[1] || "");
  if (zk === void 0) {
    var xk, yk = true;
  } else {
    xk = Ak === void 0;
    yk = xk;
  }
  if (yk) return null;
  return [zk, Ak];
};
export {
  Pi
};
