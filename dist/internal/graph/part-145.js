import { vg } from "./part-135.js";
let zg = (vk, wk) => {
  vk.values.delete(wk);
  var xk = vk.valueSubscriptions.get(wk);
  if (xk) {
    xk();
    vk.valueSubscriptions.delete(wk);
  }
  vk.latestValues[wk] = null;
  var yk = vk.valueKeys.indexOf(wk);
  if (yk >= 0) vk.valueKeys.splice(yk, 1);
  vg(vk, wk, vk.renderState);
};
export {
  zg
};
