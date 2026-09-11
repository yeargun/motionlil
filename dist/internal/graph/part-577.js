import { $g } from "./part-206.js";
import { cl } from "./part-527.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
var dj = (Pz, Qz) => {
  var Uz = $g(Pz), Sz = [];
  for (var Rz in Qz) {
    var Tz = Qz[Rz];
    if (Tz) Sz.push(cl(Pz, Uz, Rz, Tz));
  }
  return () => {
    var hA = 0;
    for (; hA < Sz.length; hA = hA + 1) Sz[hA]();
  };
};
export {
  dj
};
