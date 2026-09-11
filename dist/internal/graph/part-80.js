import { O } from "./part-78.js";
let eb = (vk) => {
  let xk = O(vk, "hue", 0), yk = O(vk, "saturation", 0), zk = O(vk, "lightness", 0), Ak = O(vk, "alpha", 1), wk = {
    hue: 0,
    saturation: 0,
    lightness: 0,
    alpha: 0
  };
  wk.hue = xk;
  wk.saturation = yk;
  wk.lightness = zk;
  wk.alpha = Ak;
  return wk;
};
export {
  eb
};
