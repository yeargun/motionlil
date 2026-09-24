import { isZeroValueString } from "./part-482.js";
let Td = (a) => {
  if (typeof a == "number") return a == 0;
  return a === null || a == "none" || a == "0" || isZeroValueString(a);
};
export {
  Td
};
