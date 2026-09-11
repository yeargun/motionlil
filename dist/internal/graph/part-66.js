import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Sb = (vk, wk, yk) => {
  let xk = wk - vk, zk = yk - vk, Ak = zk - Math.floor(zk / xk) * xk + xk;
  return Ak - Math.floor(Ak / xk) * xk + vk;
};
export {
  Sb
};
