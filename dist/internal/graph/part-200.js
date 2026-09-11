import { ac } from "./part-152.js";
import { Zg } from "./part-199.js";
import { za } from "./part-558.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let _g = (vk) => {
  var wk = vk.type;
  if (null != wk) {
    var zk, Ak, xk = ac(wk), yk = xk;
  } else yk = false;
  if (yk) {
    zk = za();
    Ak = zk;
  } else Ak = false;
  if (Ak) return Zg(vk);
  if (null == vk.duration) vk.duration = 300;
  if (null == vk.ease) vk.ease = "easeOut";
  return vk;
};
export {
  _g
};
