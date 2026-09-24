import { isCSSVariableToken } from "./part-26.js";
import { analyseComplexValue } from "./part-34.js";
import { ea } from "./part-37.js";
import { _ } from "./part-445.js";
import { mixImmediate } from "./part-46.js";
import { Ea } from "./part-463.js";
import { mixColor } from "./part-50.js";
import { mixVisibility } from "./part-51.js";
import { Fa } from "./part-52.js";
import "./effect-499.js";
import "./effect-573.js";
let getMixer = function(a) {
  if (typeof a == "number") return Fa;
  if (typeof a == "string") return isCSSVariableToken(a) ? mixImmediate : _.test(a) ? mixColor : mixComplex;
  if (Array.isArray(a)) return mixArray;
  if ("object" == typeof a) return _.test(a) ? mixColor : mixObject;
  return mixImmediate;
};
let mixArray = function(a, b) {
  let c = [...a], d = c.length, e = [];
  for (let a2 = 0; a2 < d; ++a2) {
    let d2 = c[a2];
    e.push(getMixer(d2)(d2, b[a2]));
  }
  return (a2) => {
    for (let b2 = 0; b2 < d; ++b2) c[b2] = e[b2](a2);
    return c;
  };
};
let mixObject = function(a, b) {
  let c = {
    __proto__: null
  };
  Object.assign(Object.assign(c, a), b);
  let d = [], e = [];
  for (let f in c) {
    let g = a[f], h = b[f];
    if (g != null && h != null) {
      d.push(f);
      e.push(getMixer(g)(g, h));
    }
  }
  return (a2) => {
    for (let b2 = 0; b2 < d.length; ++b2) c[d[b2] ?? ""] = e[b2](a2);
    return c;
  };
};
let mixComplex = function(a, b) {
  let c = ea(b), d = analyseComplexValue(a), e = analyseComplexValue(b);
  if (d.indexes.var.length == e.indexes.var.length && d.indexes.color.length == e.indexes.color.length && d.indexes.number.length >= e.indexes.number.length) {
    if (Ea.has(a) && e.values.length == 0 || Ea.has(b) && d.values.length == 0) return mixVisibility(a, b);
    let f = mixArray(((a2, b2) => {
      let c2 = [], d2 = {
        color: 0,
        var: 0,
        number: 0
      }, e2 = a2.indexes, f2 = a2.values;
      for (let a3 = 0; a3 < b2.values.length; ++a3) {
        let g = b2.types[a3] ?? "", h = d2[g];
        c2.push(f2[e2[g][h]] ?? 0);
        d2[g] = h + 1;
      }
      return c2;
    })(d, e), e.values);
    return (a2) => c(f(a2));
  }
  return mixImmediate(a, b);
};
export {
  getMixer,
  mixArray,
  mixComplex,
  mixObject
};
