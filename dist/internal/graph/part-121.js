import { P } from "./part-439.js";
import { Qc } from "./part-489.js";
import { Cl } from "./part-6.js";
import { Dl } from "./part-7.js";
let Pc = function(a) {
  let b = a.slice(0, -1).split("("), c = b[0] ?? "", d = b[1] ?? "";
  if (c == "drop-shadow") return a;
  let e = Cl(d, P);
  if (!e) return a;
  let f = e[0] ?? "", g = Qc.includes(c) ? 1 : 0;
  if (f != d) g = g * 100;
  return `${c}(${g}${Dl(d, f, "")})`;
};
export {
  Pc
};
