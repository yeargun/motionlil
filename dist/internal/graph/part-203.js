import { kb } from "./part-202.js";
import { f } from "./part-455.js";
import { F } from "./part-456.js";
import { Ta } from "./part-574.js";
let T = (wk, xk, yk, zk, Ak, Bk) => {
  var Ck = wk.values.get(xk);
  if (Ck) Ck.onRemove();
  var Dk = null, vk = Dk;
  if (zk) vk = (fl) => {
    zk();
  };
  var Gk = (kl, ll, ml) => {
    var gl = yk.get();
    if (Bk) wk.latest[xk] = kb(gl, Ta[xk]);
    else wk.latest[xk] = gl;
    if (vk) f.render(vk, false, false);
  }, Ek = null;
  Gk(Ek, Ek, Ek);
  var Ik = yk.on("change", Gk);
  if (Ak) yk.addDependent(Ak);
  var Hk = () => {
    Ik();
    if (vk) F(vk);
    wk.values.delete(xk);
    if (Ak) yk.removeDependent(Ak);
  }, Jk = wk.values, Fk = {
    value: null,
    onRemove: null
  };
  Fk.value = yk;
  Fk.onRemove = Hk;
  Jk.set(xk, Fk);
  return Hk;
};
export {
  T
};
