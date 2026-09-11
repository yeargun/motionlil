import { rh } from "./part-246.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Ij = (vk, wk) => {
  var xk = {
    type: null,
    stiffness: null,
    damping: null,
    mass: null,
    duration: null,
    restDelta: null,
    restSpeed: null,
    velocity: null,
    skipInitialAnimation: null
  }, zk = null;
  xk.type = zk;
  xk.stiffness = zk;
  xk.damping = zk;
  xk.mass = zk;
  xk.duration = zk;
  xk.restDelta = zk;
  xk.restSpeed = zk;
  xk.velocity = zk;
  xk.skipInitialAnimation = zk;
  if (wk) {
    var yk = wk;
  } else yk = xk;
  yk.type = "spring";
  return rh(vk, yk);
};
export {
  Ij
};
