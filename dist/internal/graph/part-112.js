import { nc } from "./part-117.js";
let hc = (a, b) => {
  let c = a.passiveEffect;
  if (!c) nc(a, b);
  else c(b, (b2) => nc(a, b2));
};
export {
  hc
};
