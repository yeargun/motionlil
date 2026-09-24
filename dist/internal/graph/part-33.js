import { V } from "./part-442.js";
import { Y } from "./part-444.js";
let $ = function(a) {
  if (typeof a == "string") return a;
  return Object.hasOwn(a, "red") ? V.transform(a) : Y.transform(a);
};
export {
  $
};
