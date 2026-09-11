import { n } from "./part-25.js";
import { f } from "./part-455.js";
import { F } from "./part-456.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let vi = (vk, wk) => {
  var Ak = n(), xk = [null], zk = null;
  xk[0] = zk;
  xk[0] = (Rk) => {
    var Pk = Rk.timestamp - Ak;
    if (Pk >= wk) {
      var Sk = xk[0];
      if (Sk) F(Sk);
      vk(Pk - wk);
    }
  };
  var yk = xk[0];
  if (yk) f.setup(yk, true, false);
  return () => {
    var Nk = xk[0];
    if (Nk) F(Nk);
  };
};
export {
  vi
};
