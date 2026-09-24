import { oa } from "./part-453.js";
let af = (a, b) => {
  if (b === "zIndex") return false;
  return typeof a == "number" || Array.isArray(a) || typeof a == "string" && (oa.test(a) || a == "0") && !a.startsWith("url(");
};
export {
  af
};
