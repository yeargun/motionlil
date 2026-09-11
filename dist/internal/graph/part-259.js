import { If } from "./part-16.js";
import { _g } from "./part-200.js";
let Xd = (vk) => {
  var wk = {
    type: null,
    stiffness: null,
    damping: null,
    mass: null,
    duration: null,
    restDelta: null,
    restSpeed: null,
    velocity: null,
    ease: null,
    delay: null,
    repeat: null,
    repeatType: null,
    times: null,
    skipInitialAnimation: null
  };
  If(wk);
  var xk = vk.delay;
  if ("number" == typeof xk) wk.delay = xk;
  var yk = vk.duration;
  if ("number" == typeof yk) wk.duration = yk;
  var zk = vk.ease;
  if (null != zk) wk.ease = zk;
  var Ak = vk.type;
  if (null != Ak) wk.type = Ak;
  var Bk = vk.stiffness;
  if ("number" == typeof Bk) wk.stiffness = Bk;
  var Ck = vk.damping;
  if ("number" == typeof Ck) wk.damping = Ck;
  var Dk = vk.mass;
  if ("number" == typeof Dk) wk.mass = Dk;
  var Ek = vk.restDelta;
  if ("number" == typeof Ek) wk.restDelta = Ek;
  var Fk = vk.restSpeed;
  if ("number" == typeof Fk) wk.restSpeed = Fk;
  var Gk = vk.velocity;
  if ("number" == typeof Gk) wk.velocity = Gk;
  return _g(wk);
};
export {
  Xd
};
