import { p } from "./part-21.js";
import { resolveElements } from "./part-231.js";
import "./effect-499.js";
import "./effect-573.js";
let parseAnimateLayoutArgs = function(a, b = null, c = null) {
  let d = p("document");
  if (typeof a == "function") return {
    scope: d,
    updateDom: a,
    defaultOptions: b
  };
  let e = d;
  if (a == d) e = a;
  else {
    let b2 = resolveElements(a);
    if (b2.length > 0) e = b2[0];
  }
  return {
    scope: e,
    updateDom: b,
    defaultOptions: c
  };
};
export {
  parseAnimateLayoutArgs
};
