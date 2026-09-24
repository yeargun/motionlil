import { Nb } from "./part-83.js";
import "./effect-499.js";
import "./effect-573.js";
let transformBoxPoints = function(a, b) {
  let f, g, h, i, j, k;
  if (!b) return a;
  let d = b((f = a.left, g = a.top, h = {
    x: 0,
    y: 0
  }, Nb(h, f, g), h)), e = b((i = a.right, j = a.bottom, k = {
    x: 0,
    y: 0
  }, Nb(k, i, j), k)), l = d.y, m = e.x;
  return {
    top: l,
    right: m,
    bottom: e.y,
    left: d.x
  };
};
export {
  transformBoxPoints
};
