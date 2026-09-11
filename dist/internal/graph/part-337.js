import { z } from "./part-522.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let ai = (vk, wk) => {
  if (z.has(vk)) return true;
  if (vk.startsWith("origin")) return true;
  var Ck = !!wk.layout, Ek = !!wk.layoutId;
  if (Ck) {
    var xk, yk, zk, Ak, Bk, Dk = true;
  } else Dk = Ek;
  if (Dk) {
    if ("opacity" == vk) xk = true;
    else xk = "boxShadow" == vk;
    if (xk) zk = true;
    else {
      yk = vk.includes("adius");
      zk = yk;
    }
    if (zk) Bk = true;
    else {
      Ak = vk.includes("Radius");
      Bk = Ak;
    }
    if (Bk) return true;
  }
  return false;
};
export {
  ai
};
