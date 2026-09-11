import { sk } from "./part-12.js";
let Vb = (vk, wk, xk) => {
  if (xk < 0) {
    var yk, zk = xk + 1;
  } else zk = xk;
  if (zk > 1) yk = zk - 1;
  else yk = zk;
  if (yk < 0.16666666666666666) return vk + (wk - vk) * 6 * yk;
  if (yk < 0.5) return wk;
  if (yk < sk) return vk + (wk - vk) * (sk - yk) * 6;
  return vk;
};
export {
  Vb
};
