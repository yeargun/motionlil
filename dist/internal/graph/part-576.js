import { E } from "./part-205.js";
import { ml } from "./part-545.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
var cj = (Pz, Rz) => {
  var Sz = null, Tz = E(Pz, Sz, Sz), Uz = [], Qz = 0;
  for (; Qz < Tz.length; Qz = Qz + 1) Uz.push(ml(Tz[Qz], Rz));
  return () => {
    var gA = 0;
    for (; gA < Uz.length; gA = gA + 1) Uz[gA]();
  };
};
export {
  cj
};
