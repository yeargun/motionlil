import { isNaNNumber } from "./../motion-dom/string-host.js";
import { wa } from "./part-479.js";
import { hf } from "./part-493.js";
import { lk } from "./part-5.js";
import { La } from "./part-87.js";
import { gd } from "./part-88.js";
import { Zf } from "./part-89.js";
import { $f } from "./part-91.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
var i = {
  test: (Oz) => {
    if (isNaNNumber(Oz) && "string" == typeof Oz) {
      var Sz = Oz.match(wa), Pz = Oz.match(hf);
      if (Array.isArray(Sz)) {
        var Qz, Rz, Tz = Sz.length, Uz = Tz;
      } else Uz = 0;
      if (Array.isArray(Pz)) {
        Qz = Pz.length;
        Rz = Qz;
      } else Rz = 0;
      return Uz + Rz > 0;
    }
    return false;
  },
  parse: (Oz) => La(Oz).values,
  createTransformer: Zf,
  getAnimatableNone: (Oz) => {
    var Sz, Tz, Pz = La(Oz), Uz = gd(Pz), Rz = [], Qz = 0;
    while (Qz < Pz.values.length) {
      if (Qz < Pz.split.length) {
        Sz = Pz.split[Qz] || "";
        Tz = Sz;
      } else Tz = lk;
      Rz.push($f(Pz.values[Qz], Tz));
      Qz += 1;
    }
    return Uz(Rz);
  }
};
export {
  i
};
