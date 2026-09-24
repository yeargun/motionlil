import { J } from "./part-434.js";
import "./effect-499.js";
import "./effect-573.js";
let isCSSVariableToken = function(a) {
  return typeof a == "string" && a.startsWith("var(--") && J.test((a.split("/*")[0] ?? "").trim());
};
export {
  isCSSVariableToken
};
