import { identity as asMotionValue } from "./../motion-dom/cast-host.js";
import { rd } from "./part-138.js";
import { zg } from "./part-145.js";
let _b = (vk, wk, xk) => {
  var yk = vk.values.get(wk) ?? null;
  if (xk != yk) {
    if (null != yk) zg(vk, wk);
    rd(vk, wk, xk);
    vk.values.set(wk, xk);
    var zk = vk.latestValues;
    zk[wk] = asMotionValue(xk).get();
    if (vk.valueKeys.indexOf(wk) == -1) vk.valueKeys.push(wk);
  }
};
export {
  _b
};
