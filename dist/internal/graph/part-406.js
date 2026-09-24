import { xj } from "./part-405.js";
import { yj } from "./part-578.js";
import { Aj } from "./part-579.js";
let zj = (a, b, c, d) => {
  let e = Array.isArray(a) ? a : Aj;
  if (typeof a == "number") e = [a, a];
  else if (typeof a == "string") {
    let b2 = a.trim();
    if (b2.includes(" ")) e = b2.split(" ");
    else e = [b2, yj[b2] ? b2 : "0"];
  }
  return xj(e[0], c, d) - xj(e[1], b, 0);
};
export {
  zj
};
