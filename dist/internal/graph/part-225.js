import { isBezierDefinition } from "./part-511.js";
import { De } from "./part-512.js";
import { Ee } from "./part-513.js";
import "./effect-499.js";
import "./effect-573.js";
let isWaapiSupportedEasing = function(a) {
  return typeof a == "function" && De() || !a || typeof a == "string" && (a in Ee || De()) || isBezierDefinition(a) || Array.isArray(a) && !!a.every(isWaapiSupportedEasing);
};
export {
  isWaapiSupportedEasing
};
