import { isSVGElement } from "./part-253.js";
let pg = (a, b, c, d, e) => {
  if (e && e[0]) return e[0][a];
  if (isSVGElement(d) && "getBBox" in d) return d.getBBox()[b];
  return d[c];
};
export {
  pg
};
