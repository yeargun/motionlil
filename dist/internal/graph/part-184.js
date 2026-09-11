import { j } from "./part-568.js";
let Kd = (vk, wk) => {
  vk.state = "complete";
  vk.onComplete(vk.unresolvedKeyframes, vk.finalKeyframe, wk);
  var yk, xk = j.length - 1, zk = xk;
  for (; zk >= 0; ) {
    if (j[zk] == vk) j.splice(zk, 1);
    yk = zk - 1;
    zk = yk;
  }
};
export {
  Kd
};
