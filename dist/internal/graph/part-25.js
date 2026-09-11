import { performanceNow, scheduleMicrotask } from "./../motion-dom/dom-host.js";
import { Lf } from "./part-24.js";
import { da } from "./part-453.js";
import { G } from "./part-457.js";
import { Pa } from "./part-460.js";
let n = () => {
  if (null == Pa[0]) {
    var Ak = da.useManualTiming, vk = G.timestamp;
    if (!G.isProcessing) {
      if (!Ak) {
        var xk, zk, wk = performanceNow(), yk = wk;
      } else yk = vk;
      zk = yk;
    } else zk = vk;
    Pa[0] = zk;
    scheduleMicrotask(Lf);
  }
  xk = Pa[0];
  if (null != xk) return xk;
  return 0;
};
export {
  n
};
