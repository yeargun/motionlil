import { g } from "./part-39.js";
import { i } from "./part-495.js";
var vv = (Oz, Sz) => {
  if (!("string" == typeof Oz)) return Oz;
  var Wz = i.parse(Oz), Vz = [];
  if (Array.isArray(Wz)) {
    var Xz, hA, $z, fA, Tz, gA, Pz, aA, bA, cA, Qz, Uz, Yz, Rz, Zz, _z, eA = Wz.length | 0, dA = 0;
    for (; dA < eA; dA = dA + 1) Vz.push(Wz[dA]);
  }
  if (Vz.length > 5) return Oz;
  Xz = i.createTransformer;
  if (!Xz) return Oz;
  hA = Xz(Oz);
  if (Vz.length > 0) {
    if (!("number" == typeof Vz[0])) Zz = 1;
    else Zz = 0;
    _z = Zz;
  } else _z = 0;
  $z = Sz.projectionDelta;
  fA = Sz.treeScale;
  if (!$z) return Oz;
  if (!fA) return Oz;
  Tz = $z.x.scale * fA.x;
  gA = $z.y.scale * fA.y;
  Pz = 1 + _z;
  if (_z < Vz.length) {
    aA = Vz[_z];
    if ("number" == typeof aA) Vz[_z] = aA / Tz;
  }
  if (Pz < Vz.length) {
    bA = Vz[Pz];
    if ("number" == typeof bA) Vz[Pz] = bA / gA;
  }
  cA = /* @__PURE__ */ g(Tz, gA, 0.5);
  Qz = 2 + _z;
  Uz = 3 + _z;
  if (Qz < Vz.length) {
    Yz = Vz[Qz];
    if ("number" == typeof Yz) Vz[Qz] = Yz / cA;
  }
  if (Uz < Vz.length) {
    Rz = Vz[Uz];
    if ("number" == typeof Rz) Vz[Uz] = Rz / cA;
  }
  return hA(Vz);
};
export {
  vv
};
