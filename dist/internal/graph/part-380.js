import { Ki } from "./part-378.js";
let Mi = (a) => {
  if (!a) return null;
  return Ki(a.node) ?? Ki(a);
};
export {
  Mi
};
