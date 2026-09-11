import { D } from "./part-113.js";
import { _b } from "./part-144.js";
let Na = (vk, wk, xk, zk) => {
  var Bk = vk.props.values;
  if ("object" == typeof Bk) {
    var Ck, Ak, yk, Dk = !!Bk[wk], Ek = Dk;
  } else Ek = false;
  if (Ek) return Bk[wk];
  Ck = vk.values.get(wk) ?? null;
  if (null == Ck) Ak = zk;
  else Ak = false;
  if (Ak) return yk = D(xk, {
    __proto__: null,
    owner: vk
  }), _b(vk, wk, yk), yk;
  return Ck;
};
export {
  Na
};
