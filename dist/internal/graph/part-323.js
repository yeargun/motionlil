import { Qh } from "./part-322.js";
import { Yi } from "./part-439.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Sj = (vk) => {
  let wk = Qh(vk);
  return {
    __proto__: null,
    interpolateProjection: (Dk) => {
      var Kk = Dk.x, Lk = Dk.y, Fk = Kk.translate, Ik = Lk.translate;
      if ("number" == typeof Fk) {
        var Ek, Gk, Jk, Hk = Fk;
      } else Hk = 0;
      if ("number" == typeof Ik) Jk = Ik;
      else Jk = 0;
      if (Math.sqrt(Hk * Hk + Jk * Jk) < 20) return null;
      Ek = {
        x: 0,
        y: 0
      };
      Ek.x = Hk;
      Ek.y = Jk;
      Gk = {
        x: 0,
        y: 0
      };
      Gk.x = 0;
      Gk.y = 0;
      return wk(Ek, Gk);
    },
    animateVisualElement: (Ik, Jk, Kk, Ok, Pk) => Yi(wk, Ik, Jk, Kk, Ok, Pk)
  };
};
export {
  Sj
};
