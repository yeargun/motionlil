import { Cg } from "./part-150.js";
function Dg(vk, wk) {
  vk.delay = 0;
  vk.repeat = 0;
  vk.repeatDelay = 0;
  vk.mode = 0;
  var xk = null;
  vk.finalKeyframe = xk;
  if (wk != xk) {
    var yk = wk.delay, zk = wk.repeat, Ak = wk.repeatDelay, Bk = wk.repeatType, Ck = wk.finalKeyframe;
    if ("number" == typeof yk) vk.delay = yk;
    if ("number" == typeof zk) vk.repeat = zk;
    if ("number" == typeof Ak) vk.repeatDelay = Ak;
    if ("string" == typeof Bk) vk.mode = Cg(Bk);
    if ("number" == typeof Ck) vk.finalKeyframe = Ck;
  }
}
export {
  Dg
};
