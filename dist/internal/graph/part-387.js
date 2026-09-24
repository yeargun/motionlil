import { rk } from "./part-1.js";
import { resolveElements } from "./part-231.js";
import { Yi } from "./part-386.js";
let Zi = (a = null, b = null, c = null, d = null) => {
  if (a == null) return [];
  if (typeof a == "string" && Yi(b)) return resolveElements(a, c, d);
  if (typeof NodeList != "undefined" && a instanceof NodeList || Array.isArray(a)) return rk(a);
  return [a];
};
export {
  Zi
};
