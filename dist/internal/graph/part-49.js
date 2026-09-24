import { hslaToRgba } from "./part-41.js";
import { Aa } from "./part-44.js";
import { Y } from "./part-444.js";
import { Da } from "./part-462.js";
let Ca = (a) => {
  let b = Aa(Da, a);
  if (!b) return null;
  let c = b.parse(a);
  return b === Y ? hslaToRgba(c) : c;
};
export {
  Ca
};
