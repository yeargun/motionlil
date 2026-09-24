import { isGenerator } from "./part-193.js";
import { af } from "./part-204.js";
let bf = (a, b, c, d) => {
  let e = a[0];
  if (e === null) return false;
  if (b === "display" || b === "visibility") return true;
  if (!af(e, b) || !af(a[a.length - 1], b)) return false;
  if (a.length == 1) return true;
  for (let b2 = 0; b2 < a.length; ++b2) if (a[b2] !== e) return true;
  return (c === "spring" || isGenerator(c)) && !!d;
};
export {
  bf
};
