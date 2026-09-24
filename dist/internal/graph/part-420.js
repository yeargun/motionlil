import { _j } from "./part-418.js";
import { bk } from "./part-419.js";
import "./effect-499.js";
import "./effect-573.js";
let scroll = function(a, b) {
  let c = b || {}, d = c.axis, e = c.container;
  if (e === void 0) e = document.scrollingElement;
  if (!e) return () => {
  };
  let f = {
    axis: d === void 0 ? "y" : d,
    container: e
  };
  for (let a2 in c) if (a2 != "axis" && a2 != "container") f[a2] = c[a2];
  return typeof a == "function" ? bk(a, f) : _j(a, f);
};
export {
  scroll
};
