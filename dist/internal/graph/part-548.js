import { p } from "./part-521.js";
var Gk;
var $k;
var Sa = /* @__PURE__ */ new Set();
Sa.add("x");
Sa.add("y");
Sa.add("z");
var Cb = [];
for (Gk = 0; Gk < p.length; Gk = Gk + 1) {
  $k = p[Gk] || "";
  if (!Sa.has($k)) Cb.push($k);
}
export {
  $k,
  Cb,
  Gk,
  Sa
};
