import { u } from "./part-17.js";
import { w } from "./part-473.js";
import { Mk } from "./part-481.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
var ef = {
  test: Mk,
  parse: w.parse,
  transform: (Oz) => {
    if ("number" == typeof Oz) {
      var Pz = Oz;
    } else Pz = 0;
    return Math.round(/* @__PURE__ */ u(0, 255, Pz));
  }
};
export {
  ef
};
