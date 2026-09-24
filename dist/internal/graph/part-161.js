import { parseCSSVariable } from "./part-160.js";
import { m } from "./part-19.js";
import { isCSSVariableToken } from "./part-26.js";
import { isNumericalString } from "./part-480.js";
import "./effect-499.js";
import "./effect-573.js";
let getVariableValue = function(a, b) {
  let c = parseCSSVariable(a), d = c[0];
  if (!d) return;
  let e = m(b, d);
  if (e != "") {
    let a2 = e.trim();
    return isNumericalString(a2) ? parseFloat(a2) : a2;
  }
  let f = c[1];
  return isCSSVariableToken(f) ? getVariableValue(f, b) : f;
};
export {
  getVariableValue
};
