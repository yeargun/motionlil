import { ye } from "./part-360.js";
import { a } from "./part-487.js";
var uv = (Oz, Rz) => {
  var Tz = Rz.target;
  if (!Tz) return Oz;
  if ("string" == typeof Oz) {
    if (a.test(Oz)) var Pz = parseFloat(Oz);
    else return Oz;
    var Sz, Qz = Pz;
  } else {
    if ("number" != typeof Oz) return Oz;
    Qz = Oz;
  }
  Sz = ye(Qz, Tz.x);
  return `${Sz}% ${ye(Qz, Tz.y)}%`;
};
export {
  uv
};
