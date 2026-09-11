import { rk } from "./part-11.js";
import { Wg } from "./part-196.js";
import { e } from "./part-27.js";
import { _ } from "./part-49.js";
import { $ } from "./part-52.js";
let Zg = (vk) => {
  let yk = [0, rk], zk = vk.stiffness, Ak = vk.damping, Bk = vk.mass, Ck = vk.velocity, Dk = vk.duration, wk = null, Ek = vk.restSpeed, Fk = vk.restDelta, Gk = {
    keyframes: [],
    stiffness: null,
    damping: null,
    mass: null,
    velocity: null,
    duration: null,
    bounce: null,
    visualDuration: null,
    restSpeed: null,
    restDelta: null
  };
  _(Gk, yk, zk, Ak, Bk, Ck, Dk, wk, wk, Ek, Fk);
  let xk = Wg(Gk, rk, (Pk) => $(Pk, 0.3));
  vk.ease = xk.ease;
  vk.duration = e(xk.duration);
  vk.type = "keyframes";
  return vk;
};
export {
  Zg
};
