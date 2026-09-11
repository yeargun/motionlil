import { ng } from "./part-121.js";
import { pd } from "./part-122.js";
import { Ra } from "./part-520.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let og = (vk) => {
  if (ng(vk.animate)) return true;
  var wk, yk, zk, Ak, Bk, Ck, Dk, xk = 0;
  for (; xk < Ra.length; xk = xk + 1) {
    wk = vk[Ra[xk] || ""];
    if (wk) zk = true;
    else {
      yk = "number" == typeof wk;
      zk = yk;
    }
    if (zk) Bk = true;
    else {
      Ak = "boolean" == typeof wk;
      Bk = Ak;
    }
    if (Bk) Dk = true;
    else {
      Ck = "string" == typeof wk;
      Dk = Ck;
    }
    if (Dk && pd(wk)) return true;
  }
  return false;
};
export {
  og
};
