import { lc } from "./part-255.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let uh = (vk) => {
  if (!vk.startsWith("::view-transition-")) return null;
  var wk = lc(vk, 18, vk.length), Lk = wk.indexOf("("), Mk = wk.lastIndexOf(")");
  if (Lk < 0) {
    var Gk, Ik, Jk, Kk, Nk, xk, yk, zk, Ak, Bk, Ck, Dk, Ek, Fk, Hk = true;
  } else {
    Gk = Mk < 0;
    Hk = Gk;
  }
  if (Hk) Jk = true;
  else {
    Ik = Mk <= Lk;
    Jk = Ik;
  }
  if (Jk) return null;
  Kk = lc(wk, 0, Lk);
  Nk = lc(wk, Lk + 1 | 0, Mk);
  if ("old" == Kk) yk = true;
  else {
    xk = "new" == Kk;
    yk = xk;
  }
  if (yk) Ak = true;
  else {
    zk = "group-children" == Kk;
    Ak = zk;
  }
  if (Ak) Ck = true;
  else {
    Bk = "group" == Kk;
    Ck = Bk;
  }
  if (Ck) Ek = true;
  else {
    Dk = "image-pair" == Kk;
    Ek = Dk;
  }
  if (Ek) return Fk = {
    layer: "",
    type: ""
  }, Fk.layer = Nk, Fk.type = Kk, Fk;
  return null;
};
export {
  uh
};
