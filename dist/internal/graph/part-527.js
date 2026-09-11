import { T } from "./part-203.js";
var cl;
cl = (Oz, Pz, Qz, Rz) => T(Pz, Qz, Rz, () => {
  Oz[Qz] = Pz.latest[Qz] ?? null;
}, null, false);
export {
  cl
};
