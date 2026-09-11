import { weakMapGet as weakMapGetHandlers } from "./../motion-dom/weak-host.js";
import { Wa } from "./part-587.js";
import { uf } from "./part-588.js";
import { vf } from "./part-589.js";
let jh = (vk) => {
  var xk = vk.target, zk = vk.borderBoxSize, yk = weakMapGetHandlers(Wa, xk);
  if (!yk) return;
  var Ck = uf(xk, zk), Ak = vf(xk, zk), wk = {
    width: 0,
    height: 0
  };
  wk.width = Ck;
  wk.height = Ak;
  var Bk = 0;
  for (; Bk < yk.length; ) {
    yk[Bk](xk, wk);
    Bk += 1;
  }
};
export {
  jh
};
