import { rk } from "./part-11.js";
import { H } from "./part-486.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
var fa = {
  test: H.test,
  parse: (Oz) => {
    var Pz = H.parse(Oz);
    if ("number" == typeof Pz) return Pz / rk;
    return 0;
  },
  transform: (Oz) => {
    if ("number" == typeof Oz) {
      var Qz, Pz = Oz;
    } else Pz = 0;
    Qz = H.transform;
    if (Qz) return Qz(Pz * rk);
    return `${Pz * rk}%`;
  }
};
export {
  fa
};
