import { callMethod0 } from "./../motion-dom/dom-host.js";
let qd = (vk) => {
  var yk = {
    __proto__: null
  }, zk = {
    __proto__: null
  };
  if (null != vk) {
    var xk = vk.values;
    if ("object" == typeof xk) {
      for (var wk in xk) {
        var Ak = xk[wk];
        yk[wk] = callMethod0(Ak, "get");
        zk[wk] = callMethod0(Ak, "getVelocity");
      }
    }
  }
  return [yk, zk];
};
export {
  qd
};
