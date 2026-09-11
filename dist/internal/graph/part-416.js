import { copyOptions } from "./../motion-dom/animation/utils/control-abi.js";
import { callFn2, isFunction } from "./../motion-dom/dom-host.js";
import { yd } from "./part-166.js";
import { Ug } from "./part-192.js";
import { Vg } from "./part-193.js";
import { S } from "./part-195.js";
import { Xg } from "./part-197.js";
import { E } from "./part-205.js";
import { Rd } from "./part-228.js";
import { e } from "./part-27.js";
import { kk } from "./part-4.js";
import { $m118$NativeAnimation } from "./part-445.js";
import { W } from "./part-466.js";
import { lk } from "./part-5.js";
import { mk } from "./part-6.js";
let Se = (vk, Ck, Fk, Mk) => {
  if (null == vk) return [];
  var el = E(vk, Mk, null), dl = el.length;
  W(dl > 0, kk, mk);
  var fl, Ok, wk, xk, yk, gl, Rk, Xk, hl, zk, jl, Yk, Zk, kl, _k, $k, Sk, Tk, Uk, Gk, Pk, Ak, al, Vk, bl, Hk, Ik, Jk, Kk, Qk, Bk, Wk, Dk, il, Ek, Lk, Nk = [], cl = 0;
  for (; cl < dl; cl = cl + 1) {
    fl = el[cl];
    Ok = copyOptions(Fk);
    wk = Ok.delay;
    if (isFunction(wk)) Ok.delay = callFn2(wk, cl, dl);
    if (null != Ck) {
      xk = "object" == typeof Ck;
      yk = xk;
    } else yk = false;
    if (yk) {
      gl = Ck;
      for (Rk in gl) {
        Xk = Ck[Rk];
        if (Array.isArray(Xk)) il = Xk;
        else {
          hl = [Xk];
          il = hl;
        }
        zk = copyOptions(S(Ok, Rk));
        if (zk.duration) zk.duration = e(zk.duration);
        if (zk.delay) zk.delay = e(zk.delay);
        jl = Vg(fl);
        Yk = zk.pseudoElement;
        if (Yk) Zk = Yk;
        else Zk = lk;
        kl = Ug(Rk, Zk);
        _k = jl.get(kl) ?? null;
        if (_k) _k.stop();
        $k = copyOptions(zk);
        $k.element = fl;
        $k.name = Rk;
        if (!Ok.type) {
          Sk = !Ok.ease;
          Tk = Sk;
        } else Tk = false;
        $k.allowFlatten = Tk;
        Uk = [/* @__PURE__ */ new Map(), "", [], null];
        Uk[0] = jl;
        Uk[1] = kl;
        Uk[2] = il;
        Uk[3] = $k;
        Nk.push(Uk);
      }
    }
  }
  for (Ek = 0; Ek < Nk.length; Ek = Ek + 1) {
    Gk = Nk[Ek];
    Pk = Gk[2];
    Ak = Gk[3];
    al = Ak.element;
    Vk = Ak.name;
    bl = Ak.pseudoElement;
    if (!bl) {
      Hk = null === Pk[0];
      Ik = Hk;
    } else Ik = false;
    if (Ik) Pk[0] = Rd(al, Vk);
    yd(Pk);
    Xg(Pk, Vk);
    if (!bl) {
      Jk = Pk.length < 2;
      Kk = Jk;
    } else Kk = false;
    if (Kk) Pk.unshift(Rd(al, Vk));
    Ak.keyframes = Pk;
  }
  for (Qk = [], Lk = 0; Lk < Nk.length; Lk = Lk + 1) {
    Bk = Nk[Lk];
    Wk = Bk[3];
    Dk = new $m118$NativeAnimation(Wk);
    Bk[0].set(Bk[1], Dk);
    Dk.getFinished().finally(/* @__PURE__ */ (($m) => () => {
      $m[0].delete($m[1]);
    })(Bk));
    Qk.push(Dk);
  }
  return Qk;
};
export {
  Se
};
