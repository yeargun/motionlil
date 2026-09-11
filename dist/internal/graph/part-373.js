import { identity as asMotionValue } from "./../motion-dom/cast-host.js";
import { D } from "./part-113.js";
import { k } from "./part-120.js";
import { sc } from "./part-321.js";
import { lk } from "./part-5.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Be = (wk, yk, zk) => {
  var vk = wk;
  if (!k(wk)) vk = D(wk, null);
  var Ak = asMotionValue(vk);
  Ak.start((Wk) => sc(lk, vk, yk, zk, null, false)(Wk));
  var xk = Ak.animation;
  if (null != xk) return xk;
  return {
    __proto__: null,
    time: 0,
    speed: 1,
    state: "idle",
    duration: 0,
    iterationDuration: 0,
    stop: () => {
    },
    then: (Tk, Uk) => {
      Tk();
    }
  };
};
export {
  Be
};
