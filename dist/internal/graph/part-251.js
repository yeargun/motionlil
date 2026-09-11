import { Vd } from "./part-247.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Jj = (vk, wk, xk) => {
  var yk = {
    type: null,
    stiffness: null,
    damping: null,
    mass: null,
    duration: null,
    restDelta: null,
    restSpeed: null,
    velocity: null,
    skipInitialAnimation: null
  }, Ak = null;
  yk.type = Ak;
  yk.stiffness = Ak;
  yk.damping = Ak;
  yk.mass = Ak;
  yk.duration = Ak;
  yk.restDelta = Ak;
  yk.restSpeed = Ak;
  yk.velocity = Ak;
  yk.skipInitialAnimation = Ak;
  if (xk) {
    var zk = xk;
  } else zk = yk;
  zk.type = "spring";
  return Vd(vk, wk, zk);
};
export {
  Jj
};
