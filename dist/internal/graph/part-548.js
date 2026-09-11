import { p } from "./part-521.js";
var Gk;
var $k;
var Ra = /* @__PURE__ */ new Set();
Ra.add("x");
Ra.add("y");
Ra.add("z");
var Cb = [];
for (Gk = 0; Gk < p.length; Gk = Gk + 1) {
  $k = p[Gk] || "";
  if (!Ra.has($k)) Cb.push($k);
}
export {
  $k,
  Cb,
  Gk,
  Ra
};
