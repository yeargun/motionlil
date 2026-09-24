import "./effect-499.js";
import "./effect-573.js";
let containsCSSVariable = function(a) {
  return typeof a == "string" && (a.split("/*")[0] ?? "").includes("var(--");
};
export {
  containsCSSVariable
};
