import { identity as asMotionValue, identity as asVisualElement } from "./../motion-dom/cast-host.js";
import { isCurrentRealmElement } from "./../motion-dom/dom-host.js";
import { Jg } from "./part-164.js";
let Kg = (vk, wk) => {
  var yk = vk.motionValue;
  if (!yk) return false;
  var Ck = asMotionValue(yk).owner;
  if (!Ck) return false;
  var Dk = asVisualElement(Ck).current;
  if (!isCurrentRealmElement(Dk)) return false;
  var Gk = asVisualElement(Ck).props, Ak = null, zk = {
    subject: null,
    name: null,
    repeatDelay: null,
    repeatType: null,
    damping: null,
    type: null,
    keyframes: [],
    onUpdate: null,
    transformTemplate: null
  };
  zk.keyframes = wk;
  zk.subject = Dk;
  zk.name = Ak;
  zk.repeatDelay = Ak;
  zk.repeatType = Ak;
  zk.damping = Ak;
  zk.type = Ak;
  zk.onUpdate = Ak;
  zk.transformTemplate = Ak;
  var xk = vk.name, Bk = vk.repeatDelay, Ek = vk.repeatType, Fk = vk.damping;
  if ("string" == typeof xk) zk.name = xk;
  if ("number" == typeof Bk) zk.repeatDelay = Bk;
  if ("string" == typeof Ek) zk.repeatType = Ek;
  if ("number" == typeof Fk) zk.damping = Fk;
  zk.type = vk.type;
  zk.onUpdate = Gk.onUpdate;
  zk.transformTemplate = Gk.transformTemplate;
  return Jg(zk);
};
export {
  Kg
};
