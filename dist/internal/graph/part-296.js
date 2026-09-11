import { ua } from "./part-294.js";
import { g } from "./part-39.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let le = (vk, wk, Fk, Gk = 0.5) => {
  vk.origin = Gk;
  vk.originPoint = /* @__PURE__ */ g(wk.min, wk.max, vk.origin);
  vk.scale = ua(Fk) / ua(wk);
  vk.translate = /* @__PURE__ */ g(Fk.min, Fk.max, vk.origin) - vk.originPoint;
  if (vk.scale >= 0.9999) {
    var zk, Ak, Bk, Ck, Dk, Ek, xk = vk.scale <= 1.0001, yk = xk;
  } else yk = false;
  if (yk) Ak = true;
  else {
    zk = vk.scale != vk.scale;
    Ak = zk;
  }
  if (Ak) vk.scale = 1;
  if (vk.translate >= -0.01) {
    Bk = vk.translate <= 0.01;
    Ck = Bk;
  } else Ck = false;
  if (Ck) Ek = true;
  else {
    Dk = vk.translate != vk.translate;
    Ek = Dk;
  }
  if (Ek) vk.translate = 0;
};
export {
  le
};
