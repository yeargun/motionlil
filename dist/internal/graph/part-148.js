import { $m53$SubscriptionManager } from "./part-443.js";
let Bg = (vk, wk, xk) => {
  var Ak = vk.events.get(wk), yk = new $m53$SubscriptionManager();
  if (Ak) {
    var zk = Ak;
  } else {
    vk.events.set(wk, yk);
    zk = yk;
  }
  return zk.add(xk);
};
export {
  Bg
};
