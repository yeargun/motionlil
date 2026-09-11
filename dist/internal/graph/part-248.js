import { D } from "./part-113.js";
import { f } from "./part-455.js";
import { F } from "./part-456.js";
import { vb } from "./part-502.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let sh = (vk) => {
  var wk = [];
  vb.current = wk;
  var zk = vk(), xk = null;
  vb.current = xk;
  var yk = D(zk, xk), Bk = (Uk) => {
    yk.set(vk());
  }, Dk = (Tk, Uk, Vk) => {
    f.preRender(Bk, false, true);
  }, Ck = [], Ak = 0;
  for (; Ak < wk.length; ) {
    Ck.push(wk[Ak].on("change", Dk));
    Ak += 1;
  }
  yk.on("destroy", (Uk, Wk, Xk) => {
    var Vk = 0;
    while (Vk < Ck.length) {
      Ck[Vk]();
      Vk += 1;
    }
    F(Bk);
  });
  return yk;
};
export {
  sh
};
