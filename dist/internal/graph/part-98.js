import { g } from "./part-39.js";
import { X } from "./part-483.js";
import { lk } from "./part-5.js";
import { B } from "./part-74.js";
import { eb } from "./part-94.js";
import { Wb } from "./part-95.js";
import { hd } from "./part-97.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let id = (vk, xk) => {
  var zk = hd(vk), Bk = hd(xk);
  if ("boolean" == typeof zk) {
    var Dk, wk, yk, Ak, Ck, Fk, Gk, Hk, Ek = true;
  } else {
    Dk = "boolean" == typeof Bk;
    Ek = Dk;
  }
  if (Ek) return (Tk) => `${eb(vk, xk)(Tk)}`;
  wk = zk;
  yk = Bk;
  Ak = wk.red;
  Ck = wk.green;
  Fk = wk.blue;
  Gk = wk.alpha;
  Hk = {
    red: 0,
    green: 0,
    blue: 0,
    alpha: 0
  };
  B(Hk, Ak, Ck, Fk, Gk);
  return (Uk) => {
    Hk.red = Wb(wk.red, yk.red, Uk);
    Hk.green = Wb(wk.green, yk.green, Uk);
    Hk.blue = Wb(wk.blue, yk.blue, Uk);
    Hk.alpha = /* @__PURE__ */ g(wk.alpha, yk.alpha, Uk);
    var Vk = X.transform;
    if (Vk) return `${Vk(Hk)}`;
    return lk;
  };
};
export {
  id
};
