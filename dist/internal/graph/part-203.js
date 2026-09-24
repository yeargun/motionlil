import { Ue } from "./part-514.js";
let Te = (a) => {
  let b = a.ease;
  if (typeof b == "string" && b in Ue) a.ease = Ue[b];
};
export {
  Te
};
