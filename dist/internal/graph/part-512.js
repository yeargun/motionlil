import { i } from "./part-495.js";
import { Pk } from "./part-509.js";
import { bl } from "./part-510.js";
import { el } from "./part-511.js";
import { B } from "./part-74.js";
import { Ia } from "./part-76.js";
import { Ja } from "./part-77.js";
import { db } from "./part-79.js";
import { eb } from "./part-80.js";
var xb = {
  test: Pk,
  parse: bl,
  transform: el,
  createTransformer: i.createTransformer ?? null,
  getAnimatableNone: (Oz) => {
    var Uz = i.parse(Oz), Sz = i.createTransformer;
    if (!Sz) return Oz;
    var Yz = Sz(`${Oz}`), Tz = [];
    if (Array.isArray(Uz)) {
      var Pz, Qz, Vz, _z, aA, cA, Wz, $z, bA, Rz, Zz = Uz.length | 0, Xz = 0;
      while (Xz < Zz) {
        Pz = Uz[Xz];
        if ("number" == typeof Pz) Tz.push(0);
        else {
          if (Ia(Pz)) {
            Qz = db(Pz);
            Vz = Qz.red;
            _z = Qz.green;
            aA = Qz.blue;
            cA = {
              red: 0,
              green: 0,
              blue: 0,
              alpha: 0
            };
            B(cA, Vz, _z, aA, 1);
            Tz.push(cA);
          } else {
            if (Ja(Pz)) {
              Wz = eb(Pz);
              $z = Wz.saturation;
              bA = Wz.lightness;
              var qA = Wz.hue;
              Rz = {
                hue: 0,
                saturation: 0,
                lightness: 0,
                alpha: 0
              };
              Rz.hue = qA;
              Rz.saturation = $z;
              Rz.lightness = bA;
              Rz.alpha = 1;
              Tz.push(Rz);
            } else Tz.push(Pz);
          }
        }
        Xz += 1;
      }
    }
    return Yz(Tz);
  }
};
export {
  xb
};
