import { va } from "./part-465.js";
import { ga } from "./part-491.js";
import { Ia } from "./part-76.js";
import { Ja } from "./part-77.js";
import { cb } from "./part-79.js";
import { db } from "./part-80.js";
import { ag } from "./part-93.js";
import { bg } from "./part-96.js";
let hd = (vk) => {
  var xk = bg(vk), zk = va, yk = null;
  zk(!!xk, `'${vk}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable");
  if (!xk) return false;
  var wk = xk.parse(vk);
  if (xk == ga && Ja(wk)) return ag(db(wk));
  if (Ia(wk)) return cb(wk);
  return false;
};
export {
  hd
};
