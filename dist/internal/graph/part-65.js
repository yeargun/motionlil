import { sb } from "./part-471.js";
import { Vf } from "./part-63.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let cd = (vk, yk, zk) => {
  if (vk) {
    var wk, xk = true;
  } else {
    wk = sb.has(yk);
    xk = wk;
  }
  if (xk) return;
  console.warn(Vf(yk, zk));
  sb.add(yk);
};
export {
  cd
};
