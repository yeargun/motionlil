import { De } from "./part-512.js";
let Yg = (a) => {
  let b = a.type;
  delete a.type;
  if (typeof b == "function" && "applyToOptions" in b && De()) return b.applyToOptions(a);
  if (a.duration == null) a.duration = 300;
  if (a.ease == null) a.ease = "easeOut";
  return a;
};
export {
  Yg
};
