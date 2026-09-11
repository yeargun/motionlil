import { nd } from "./part-115.js";
import { i } from "./part-495.js";
import { wb } from "./part-508.js";
import { xb } from "./part-512.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let lg = (vk, yk) => {
  var wk = nd(vk);
  if (wk) {
    if (wk == wb) {
      var zk, Bk, xk, Ak = true;
    } else {
      zk = wk == xb;
      Ak = zk;
    }
    if (Ak) {
      Bk = wk.getAnimatableNone;
      if (Bk) return Bk(yk);
    }
  }
  xk = i.getAnimatableNone;
  if (xk) return xk(yk);
  return yk;
};
export {
  lg
};
