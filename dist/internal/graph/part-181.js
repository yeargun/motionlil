import { Td } from "./part-163.js";
import { Ud } from "./part-164.js";
let se = (a) => {
  let c = a.unresolvedKeyframes, d = [];
  for (let a2 = 0; a2 < c.length; a2 = a2 + 1 | 0) if (Td(c[a2])) d.push(a2);
  if (d.length > 0) Ud(c, d, a.name);
};
export {
  se
};
