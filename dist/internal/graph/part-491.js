import { y } from "./part-475.js";
import { wa } from "./part-479.js";
import { df } from "./part-480.js";
import { H } from "./part-486.js";
import { N } from "./part-75.js";
import { Ja } from "./part-77.js";
import { eb } from "./part-80.js";
import { P } from "./part-81.js";
import { Q } from "./part-82.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
var ga = {
  test: (Tz) => {
    if ("string" == typeof Tz) {
      if (df.test(Tz)) {
        var Rz, Pz = Tz.startsWith("hsl"), Qz = Pz;
      } else Qz = false;
      if (Qz) return true;
    }
    if (!(null == Tz) && "object" == typeof Tz) {
      for (Rz in Tz) {
        if ("hue" == Rz) return true;
      }
    }
    return false;
  },
  parse: (Oz) => ((eA) => {
    if (!("string" == typeof eA)) {
      var jA = Q(eA, "hue", 0), Xz = Q(eA, "saturation", 0), aA = Q(eA, "lightness", 0), fA = Q(eA, "alpha", 1), Tz = {
        hue: 0,
        saturation: 0,
        lightness: 0,
        alpha: 0
      };
      Tz.hue = jA;
      Tz.saturation = Xz;
      Tz.lightness = aA;
      Tz.alpha = fA;
      return Tz;
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
      hue: 0,
      saturation: 0,
      lightness: 0,
      alpha: 0
    };
    Vz.hue = _z;
    Vz.saturation = dA;
    Vz.lightness = iA;
    Vz.alpha = mA;
    return Vz;
  })(Oz),
  transform: (Oz) => {
    var Uz = {
      hue: 0,
      saturation: 0,
      lightness: 0,
      alpha: 0
    };
    Uz.hue = 0;
    Uz.saturation = 0;
    Uz.lightness = 0;
    Uz.alpha = 1;
    if (Ja(Oz)) {
      var Pz, dA, Xz, aA, Yz, Qz, Zz, bA, Rz, eA, _z, $z, cA, Sz, Tz, Vz = eb(Oz), Wz = Vz;
    } else Wz = Uz;
    Pz = H.transform;
    dA = y.transform;
    Xz = `${N(Wz.saturation)}%`;
    aA = `${N(Wz.lightness)}%`;
    if (Pz) {
      Yz = Pz(N(Wz.saturation));
      Qz = Pz(N(Wz.lightness));
      Zz = `${Yz}`;
      bA = `${Qz}`;
      $z = Zz;
      cA = bA;
    } else {
      $z = Xz;
      cA = aA;
    }
    Rz = Wz.alpha;
    if (dA) {
      eA = dA(Wz.alpha);
      if ("number" == typeof eA) Sz = eA;
      else Sz = Rz;
      Tz = Sz;
    } else Tz = Rz;
    _z = `hsla(${Math.round(Wz.hue)}, ` + $z + ", " + cA + ", ";
    return _z + `${N(Tz)})`;
  }
};
export {
  ga
};
