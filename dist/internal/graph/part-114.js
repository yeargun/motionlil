import { stringSubstring } from "./../motion-dom/string-host.js";
import { rk } from "./part-11.js";
import { wa } from "./part-479.js";
import { lk } from "./part-5.js";
import { ya } from "./part-503.js";
let kg = (vk) => {
  var yk = stringSubstring(vk, 0, vk.length - 1).split("(");
  if (yk.length < 2) return vk;
  var Ak = yk[0] || "", Bk = yk[1] || "";
  if ("drop-shadow" == Ak) return vk;
  var zk = Bk.match(wa);
  if (!Array.isArray(zk)) {
    var Ck, Ek, Fk, wk, xk, Dk = true;
  } else {
    Ck = 0 == zk.length;
    Dk = Ck;
  }
  if (Dk) return vk;
  Ek = `${zk[0]}`;
  Fk = Bk.replace(wa, lk);
  if (ya.has(Ak)) xk = 1;
  else xk = 0;
  if (Ek != Bk) wk = xk * rk;
  else wk = xk;
  return Ak + `(${wk}` + Fk + ")";
};
export {
  kg
};
