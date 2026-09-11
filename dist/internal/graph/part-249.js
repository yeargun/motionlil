import { Td } from "./part-242.js";
import { sh } from "./part-248.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Hj = (vk, wk, yk, zk) => {
  let xk = Td(wk, yk, zk);
  return sh(() => {
    var Fk = vk.get();
    if ("number" == typeof Fk) {
      var Gk = Fk;
    } else Gk = 0;
    return xk(Gk);
  });
};
export {
  Hj
};
