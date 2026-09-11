import { Ik } from "./part-452.js";
import { df } from "./part-480.js";
import { X } from "./part-483.js";
import { B } from "./part-74.js";
import { Yf } from "./part-83.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
var tb = {
  test: (Tz) => {
    if ("string" == typeof Tz) {
      if (df.test(Tz)) {
        var Rz, Pz = Tz.startsWith("#"), Qz = Pz;
      } else Qz = false;
      if (Qz) return true;
    }
    if (null != Ik && !(null == Tz) && "object" == typeof Tz) {
      for (Rz in Tz) {
        if (Rz == Ik) return true;
      }
    }
    return false;
  },
  parse: (Oz) => {
    if ("string" == typeof Oz) return Yf(Oz);
    var Pz = {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 0
    };
    B(Pz, 0, 0, 0, 1);
    return Pz;
  },
  transform: X.transform ?? null
};
export {
  tb
};
