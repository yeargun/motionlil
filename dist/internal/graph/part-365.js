import { callFn1, callMethod0, isFunction } from "./../motion-dom/dom-host.js";
import { Dh } from "./part-272.js";
import { Eh } from "./part-274.js";
import { nb } from "./part-364.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let si = (vk, yk) => {
  var zk = callMethod0(vk, "getBoundingClientRect"), Ck = nb(zk, "top"), Ek = nb(zk, "right"), Fk = nb(zk, "bottom"), Dk = {
    top: Ck,
    right: Ek,
    bottom: Fk,
    left: nb(zk, "left")
  }, wk = null;
  if (yk != wk) {
    var xk, Ak = isFunction(yk), Bk = Ak;
  } else Bk = false;
  if (Bk) xk = (Uk) => {
    var Yk = callFn1(yk, Uk);
    if ("object" == typeof Yk) {
      var Rk = Yk.x, Vk = Yk.y;
      if ("number" == typeof Rk) {
        var Tk, Wk, Xk, Sk = Rk;
      } else Sk = 0;
      if ("number" == typeof Vk) Wk = Vk;
      else Wk = 0;
      Tk = Sk;
      Xk = Wk;
    } else {
      Tk = 0;
      Xk = 0;
    }
    return {
      x: Tk,
      y: Xk
    };
  };
  else xk = wk;
  return Dh(Eh(Dk, xk));
};
export {
  si
};
