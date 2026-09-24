import { Yb } from "./part-486.js";
let oc = (a) => {
  let b = Yb.current;
  if (b) b.push(a);
  return a.current;
};
export {
  oc
};
