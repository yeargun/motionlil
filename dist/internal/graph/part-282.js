import { ee } from "./part-279.js";
import { ge } from "./part-281.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let oc = (vk) => {
  if (ee(vk)) {
    var wk, yk, zk, Ak, Bk, Ck, Dk, Ek, Fk, Gk, Hk, Ik, Jk, xk = true;
  } else {
    wk = ge(vk);
    xk = wk;
  }
  if (xk) return true;
  if (vk.z) zk = true;
  else {
    yk = "number" == typeof vk.z;
    zk = yk;
  }
  if (zk) return true;
  if (vk.rotate) Bk = true;
  else {
    Ak = "number" == typeof vk.rotate;
    Bk = Ak;
  }
  if (Bk) return true;
  if (vk.rotateX) Dk = true;
  else {
    Ck = "number" == typeof vk.rotateX;
    Dk = Ck;
  }
  if (Dk) return true;
  if (vk.rotateY) Fk = true;
  else {
    Ek = "number" == typeof vk.rotateY;
    Fk = Ek;
  }
  if (Fk) return true;
  if (vk.skewX) Hk = true;
  else {
    Gk = "number" == typeof vk.skewX;
    Hk = Gk;
  }
  if (Hk) return true;
  if (vk.skewY) Jk = true;
  else {
    Ik = "number" == typeof vk.skewY;
    Jk = Ik;
  }
  if (Jk) return true;
  return false;
};
export {
  oc
};
