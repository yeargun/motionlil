import { kg } from "./part-114.js";
import { i } from "./part-495.js";
import { lk } from "./part-5.js";
import { lf } from "./part-504.js";
import { Ok } from "./part-505.js";
import { al } from "./part-506.js";
import { dl } from "./part-507.js";
var wb = {
  test: Ok,
  parse: al,
  transform: dl,
  createTransformer: i.createTransformer ?? null,
  getAnimatableNone: (Oz) => {
    if (!("string" == typeof Oz)) return Oz;
    var Tz = Oz.match(lf);
    if (!Array.isArray(Tz)) return Oz;
    var Pz, Qz, Rz, Vz = Tz.length | 0, Uz = lk, Sz = 0;
    while (Sz < Vz) {
      Pz = kg(`${Tz[Sz]}`);
      if (0 == Sz) Rz = Pz;
      else {
        Qz = Uz + " " + Pz;
        Rz = Qz;
      }
      Uz = Rz;
      Sz += 1;
    }
    return Uz;
  }
};
export {
  wb
};
