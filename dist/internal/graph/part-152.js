import { oc } from "./part-118.js";
import { sd } from "./part-142.js";
import { Id } from "./part-153.js";
let Hd = (a, b, c) => {
  let d = a.values, e = d.get(b) ?? null;
  if (c !== e) {
    if (e != null) Id(a, b);
    sd(a, b, c);
    d.set(b, c);
    a.latestValues[b] = oc(c);
  }
};
export {
  Hd
};
