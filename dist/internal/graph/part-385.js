import { l } from "./part-0.js";
let Ee = (vk) => {
  if (null == vk) {
    var wk, yk, xk = true;
  } else {
    wk = false == vk;
    xk = wk;
  }
  if (xk) return null;
  if ("object" == typeof vk) {
    yk = l(vk.x);
    return {
      x: yk,
      y: l(vk.y)
    };
  }
  return null;
};
export {
  Ee
};
