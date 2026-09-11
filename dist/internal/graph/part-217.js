import { callMethod0, constructConfigured, windowGet } from "./../motion-dom/dom-host.js";
import { E } from "./part-205.js";
let Pd = (vk, xk) => {
  var zk = null, Dk = E(vk, zk, zk), Ck = constructConfigured(windowGet("AbortController"), {
    __proto__: null
  }), wk = {
    __proto__: null
  };
  wk.passive = true;
  for (var Ak in xk) wk[Ak] = xk[Ak];
  if (!("boolean" == typeof xk.passive)) wk.passive = true;
  wk.signal = Ck.signal;
  var Bk = () => {
    callMethod0(Ck, "abort");
  }, yk = [[], null, null];
  yk[0] = Dk;
  yk[1] = wk;
  yk[2] = Bk;
  return yk;
};
export {
  Pd
};
