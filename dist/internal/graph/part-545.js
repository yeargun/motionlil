import { $g } from "./part-206.js";
import { _k } from "./part-526.js";
var ml;
ml = (Pz, Qz) => {
  var Uz = $g(Pz), Sz = [];
  for (var Rz in Qz) {
    var Tz = Qz[Rz];
    if (Tz) Sz.push(_k(Pz, Uz, Rz, Tz));
  }
  return () => {
    var hA = 0;
    for (; hA < Sz.length; hA = hA + 1) Sz[hA]();
  };
};
export {
  ml
};
