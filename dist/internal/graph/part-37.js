import { Fa } from "./part-18.js";
import { Ga } from "./part-30.js";
import { Yc } from "./part-35.js";
import { Ac, Nb, zc } from "./part-36.js";
import { Ze } from "./part-462.js";
import { _e } from "./part-463.js";
import { $e } from "./part-464.js";
import { W } from "./part-466.js";
import { rb, xc, yc } from "./part-467.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let na = (vk) => {
  if (Array.isArray(vk)) return W(4 == vk.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length"), Ga(vk[0], vk[1], vk[2], vk[3]);
  if ("string" == typeof vk) {
    var wk = vk;
    if ("linear" == wk) return Fa;
    if ("easeIn" == wk) return Ze;
    if ("easeInOut" == wk) return $e;
    if ("easeOut" == wk) return _e;
    if ("circIn" == wk) return Nb;
    if ("circInOut" == wk) return Ac;
    if ("circOut" == wk) return zc;
    if ("backIn" == wk) return rb;
    if ("backInOut" == wk) return yc;
    if ("backOut" == wk) return xc;
    if ("anticipate" == wk) return Yc;
    W(false, `Invalid easing type '${wk}'`, "invalid-easing-type");
    return Fa;
  }
  return vk;
};
export {
  na
};
