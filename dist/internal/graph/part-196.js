import { v } from "./part-28.js";
import { ea } from "./part-468.js";
import { Rb } from "./part-47.js";
import { _ } from "./part-49.js";
import { $c } from "./part-51.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Wg = (vk, wk, xk) => {
  let yk = [0, wk], Ak = vk.stiffness, Ck = vk.damping, Ek = vk.mass, Gk = vk.velocity, Ik = vk.duration, Jk = vk.bounce, Kk = vk.visualDuration, Lk = vk.restSpeed, Mk = vk.restDelta, Nk = {
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
  _(Nk, yk, Ak, Ck, Ek, Gk, Ik, Jk, Kk, Lk, Mk);
  let Bk = $c(Nk), Dk = Math.min(Rb(Bk.next), ea), Fk = (Yk) => Bk.next(Dk * Yk).value / wk, Hk = v(Dk), zk = {
    type: "",
    ease: null,
    duration: 0
  };
  zk.type = "keyframes";
  zk.ease = Fk;
  zk.duration = Hk;
  return zk;
};
export {
  Wg
};
