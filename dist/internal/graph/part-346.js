import { qk } from "./part-10.js";
import { jk } from "./part-3.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let gi = (vk, wk, xk = 1, yk = 0, zk = true) => {
  vk.pathLength = 1;
  if (zk) {
    var Ak = qk, Bk = jk;
  } else {
    Ak = "strokeDashoffset";
    Bk = "strokeDasharray";
  }
  vk[Ak] = `${0 - yk}`;
  vk[Bk] = `${wk} ${xk}`;
};
export {
  gi
};
