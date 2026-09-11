import { $g } from "./part-206.js";
import { gl } from "./part-529.js";
var ol;
ol = (Pz, Qz) => {
  var Uz = $g(Pz), Sz = [];
  for (var Rz in Qz) {
    var Tz = Qz[Rz];
    if (Tz) Sz.push(gl(Pz, Uz, Rz, Tz));
  }
  return () => {
    var hA = 0;
    for (; hA < Sz.length; hA = hA + 1) Sz[hA]();
  };
};
export {
  ol
};
