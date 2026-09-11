import { ca } from "./part-381.js";
import { Ie } from "./part-392.js";
import { r } from "./part-591.js";
import { K } from "./part-611.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Di = (vk) => {
  if (r.value) {
    var wk = K;
    wk.nodes = ca("nodes") + 1;
  }
  var xk = vk.parent;
  if (!xk) return;
  if (!Ie(vk)) vk.isProjectionDirty = xk.isProjectionDirty;
  if (vk.isProjectionDirty) {
    var yk, Ak, Bk, zk = true;
  } else {
    yk = xk.isProjectionDirty;
    zk = yk;
  }
  if (zk) Bk = true;
  else {
    Ak = xk.isSharedProjectionDirty;
    Bk = Ak;
  }
  if (Bk) vk.isSharedProjectionDirty = true;
  if (xk.isTransformDirty) vk.isTransformDirty = true;
};
export {
  Di
};
