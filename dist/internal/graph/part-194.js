import { isGenerator } from "./part-193.js";
import { De } from "./part-512.js";
let Ge = (a) => {
  let b = a.type, c = Object.assign({}, a);
  delete c.type;
  if (isGenerator(b) && De()) return b.applyToOptions(c);
  let d = c.duration, e = c.ease;
  c.duration = d ?? 300;
  c.ease = e ?? "easeOut";
  return c;
};
export {
  Ge
};
