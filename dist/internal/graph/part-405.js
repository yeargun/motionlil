import { arrayFromNullable, isNodeList } from "./../motion-dom/dom-host.js";
import { E } from "./part-205.js";
import { Pa } from "./part-404.js";
let wc = (vk, wk, Ak, Ck) => {
  if (null == vk) return [];
  if ("string" == typeof vk) {
    var Bk, Ek, Dk, zk, xk = Pa(wk), yk = xk;
  } else yk = false;
  if (yk) return E(vk, Ak, Ck);
  if (isNodeList(vk)) return arrayFromNullable(vk);
  if (Array.isArray(vk)) {
    for (Bk = [], Ek = vk.length | 0, zk = 0; zk < Ek; zk = zk + 1) {
      Dk = vk[zk];
      if (Dk) Bk.push(Dk);
    }
    return Bk;
  }
  return [vk];
};
export {
  wc
};
