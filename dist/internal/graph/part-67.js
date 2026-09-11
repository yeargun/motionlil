import { u } from "./part-17.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let sj = (vk, wk = "end") => (Ek) => {
  if ("end" == wk) {
    var Gk, Hk, Bk, Ck, Dk, Fk = Math.min(Ek, 0.999), Ik = Fk;
  } else {
    Gk = Math.max(Ek, 1e-3);
    Ik = Gk;
  }
  Hk = Ik * vk;
  if ("end" == wk) {
    Bk = Math.floor(Hk);
    Dk = Bk;
  } else {
    Ck = Math.ceil(Hk);
    Dk = Ck;
  }
  return u(0, 1, Dk / vk);
};
export {
  sj
};
