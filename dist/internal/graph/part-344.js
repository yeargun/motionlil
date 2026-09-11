import { lk } from "./part-5.js";
let ei = (vk) => {
  if (0 == vk.length) return vk;
  var wk, zk = vk.charAt(0).toUpperCase(), xk = lk, yk = 1;
  for (; yk < vk.length; ) {
    wk = xk + vk.charAt(yk);
    xk = wk;
    yk += 1;
  }
  return zk + xk;
};
export {
  ei
};
