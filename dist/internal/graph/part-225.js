import { weakSetHas } from "./../motion-dom/weak-host.js";
import { hc } from "./part-224.js";
import { ja } from "./part-585.js";
let ih = (vk, xk) => {
  var yk = vk.currentTarget;
  if (!yk) return;
  var zk = (Lk) => {
    if (weakSetHas(ja, yk)) return;
    hc(yk, "down");
    var Mk = (Yk) => {
      hc(yk, "up");
    }, Nk = () => {
      hc(yk, "cancel");
    };
    yk.addEventListener("keyup", (Yk) => {
      var Zk = Yk.key;
      if ("string" == typeof Zk) {
        if ("Enter" != Zk) return;
      } else return;
      Mk(Yk);
    }, xk);
    yk.addEventListener("blur", Nk, xk);
  }, wk = (Kk) => {
    var Lk = Kk.key;
    if ("string" == typeof Lk) {
      if ("Enter" != Lk) return;
    } else return;
    zk(Kk);
  };
  yk.addEventListener("keydown", wk, xk);
  yk.addEventListener("blur", () => {
    yk.removeEventListener("keydown", wk, null);
  }, xk);
};
export {
  ih
};
