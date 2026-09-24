import { nk } from "./part-0.js";
import { rk } from "./part-1.js";
import "./effect-499.js";
import "./effect-573.js";
let resolveElements = function(a = null, b = null, c = null) {
  if (a == null) return [];
  if (nk(a)) return [a];
  if (typeof a == "string") {
    let d = c ? c[a] ?? null : null;
    if (d != null) return Array.from(d);
    return b ? Array.from(b.current.querySelectorAll(a)) : Array.from(document.querySelectorAll(a));
  }
  return rk(a);
};
export {
  resolveElements
};
