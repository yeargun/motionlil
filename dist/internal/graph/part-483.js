import { y } from "./part-475.js";
import { wa } from "./part-479.js";
import { df } from "./part-480.js";
import { ef } from "./part-482.js";
import { B } from "./part-74.js";
import { N } from "./part-75.js";
import { Ia } from "./part-76.js";
import { db } from "./part-79.js";
import { P } from "./part-81.js";
import { Q } from "./part-82.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
var X = {
  test: (Tz) => {
    if ("string" == typeof Tz) {
      if (df.test(Tz)) {
        var Rz, Pz = Tz.startsWith("rgb"), Qz = Pz;
      } else Qz = false;
      if (Qz) return true;
    }
    if (!(null == Tz) && "object" == typeof Tz) {
      for (Rz in Tz) {
        if ("red" == Rz) return true;
      }
    }
    return false;
  },
  parse: (Oz) => ((eA) => {
    if (!("string" == typeof eA)) {
      var Tz = Q(eA, "red", 0), Xz = Q(eA, "green", 0), aA = Q(eA, "blue", 0), fA = Q(eA, "alpha", 1), jA = {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 0
      };
      B(jA, Tz, Xz, aA, fA);
      return jA;
    }
    var Uz = eA.match(wa);
    if (Array.isArray(Uz)) {
      if (Uz.length > 0) {
        var bA, gA, kA, Vz, _z, cA, dA, hA, iA, lA, mA, Yz = P(Uz[0]), Zz = Yz;
      } else Zz = 0;
      if (Uz.length > 1) {
        bA = P(Uz[1]);
        cA = bA;
      } else cA = 0;
      if (Uz.length > 2) {
        gA = P(Uz[2]);
        hA = gA;
      } else hA = 0;
      if (Uz.length > 3) {
        kA = P(Uz[3]);
        lA = kA;
      } else lA = 1;
      _z = Zz;
      dA = cA;
      iA = hA;
      mA = lA;
    } else {
      _z = 0;
      dA = 0;
      iA = 0;
      mA = 1;
    }
    Vz = {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 0
    };
    B(Vz, _z, dA, iA, mA);
    return Vz;
  })(Oz),
  transform: (Oz) => {
    var Rz = {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 0
    };
    B(Rz, 0, 0, 0, 1);
    if (Ia(Oz)) {
      var Yz, _z, $z, bA, dA, Pz, aA, cA, Zz, Tz, Uz, Vz, Xz, Qz, Sz = db(Oz), Wz = Sz;
    } else Wz = Rz;
    Yz = ef.transform;
    _z = y.transform;
    $z = Wz.red;
    bA = Wz.green;
    dA = Wz.blue;
    Pz = Wz.alpha;
    if (Yz) {
      aA = Yz($z);
      cA = Yz(bA);
      Zz = Yz(dA);
      if (_z) {
        Tz = _z(Pz);
        Xz = Tz;
      } else Xz = Pz;
      if ("number" == typeof Xz) Qz = Xz;
      else Qz = Pz;
      Uz = `rgba(${aA}, ${cA}, ${Zz}, `;
      return Uz + `${N(Qz)})`;
    }
    Vz = `rgba(${Math.round($z)}, ${Math.round(bA)}, ${Math.round(dA)}, `;
    return Vz + `${N(Pz)})`;
  }
};
export {
  X
};
