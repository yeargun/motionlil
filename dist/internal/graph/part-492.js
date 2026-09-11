import { X } from "./part-483.js";
import { tb } from "./part-484.js";
import { ga } from "./part-491.js";
import { Ia } from "./part-76.js";
import { Ja } from "./part-77.js";
import { cb } from "./part-79.js";
import { db } from "./part-80.js";
import { fd } from "./part-85.js";
import { Ub } from "./part-86.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
var h = {
  test: (Oz) => {
    if (X.test(Oz)) {
      var Pz, Rz, Sz, Qz = true;
    } else {
      Pz = tb.test(Oz);
      Qz = Pz;
    }
    if (Qz) Sz = true;
    else {
      Rz = ga.test(Oz);
      Sz = Rz;
    }
    return Sz;
  },
  parse: fd,
  transform: Ub,
  getAnimatableNone: (Oz) => {
    var Pz = fd(Oz);
    if (Ia(Pz)) {
      var Qz = cb(Pz);
      Qz.alpha = 0;
      return Ub(Qz);
    }
    if (Ja(Pz)) {
      var Rz = db(Pz);
      Rz.alpha = 0;
      return Ub(Rz);
    }
    return Pz;
  }
};
export {
  h
};
