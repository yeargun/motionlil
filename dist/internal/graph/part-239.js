import { Ma } from "./part-100.js";
import { g } from "./part-39.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Ej = (vk, wk, xk) => {
  if ("number" == typeof vk) {
    var zk, yk = "number" == typeof wk;
  } else yk = false;
  if (yk) zk = "number" == typeof xk;
  else zk = false;
  if (zk) return g(vk, wk, xk);
  return Ma(vk)(vk, wk);
};
export {
  Ej
};
