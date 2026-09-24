import { c } from "./part-16.js";
let C = function() {
  D = null;
};
let D = null;
let E = (a) => {
  D = a;
  c(C);
};
export {
  C,
  D,
  E
};
