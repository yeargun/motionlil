import { dm } from "./part-11.js";
import { camelToDash } from "./part-226.js";
import { Of } from "./part-229.js";
import { Sf } from "./part-233.js";
import { Tf } from "./part-234.js";
import "./effect-499.js";
import "./effect-573.js";
let addAttrValue = function(a, b, c, d) {
  let i, j, e = dm(a, c), f = !e && (c.startsWith("data") || c.startsWith("aria")) ? camelToDash(c) : c, h = e ? (i = (d2) => {
    a[f] = b.latest[c];
  }, i) : (j = (d2) => {
    let e2 = b.latest[c];
    if (e2 == null) a.removeAttribute(f);
    else a.setAttribute(f, `${e2}`);
  }, j);
  return Of(b, c, d, h, null, true);
};
let Uf = Sf(Tf(addAttrValue));
export {
  Uf,
  addAttrValue
};
