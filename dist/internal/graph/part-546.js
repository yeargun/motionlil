import { $g } from "./part-206.js";
import { fl } from "./part-528.js";
var nl;
nl = (Pz, Qz) => {
  var Uz = $g(Pz), Sz = [];
  for (var Rz in Qz) {
    var Tz = Qz[Rz];
    if (Tz) Sz.push(fl(Pz, Uz, Rz, Tz));
  }
  return () => {
    var hA = 0;
    for (; hA < Sz.length; hA = hA + 1) Sz[hA]();
  };
};
export {
  nl
};
