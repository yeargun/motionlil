import { Fd } from "./part-150.js";
let Gd = (a, b) => {
  let c = Fd(a);
  if (c) {
    let a2 = c.variantChildren;
    if (a2) a2.add(b);
    return () => {
      c.variantChildren.delete(b);
    };
  }
  return null;
};
export {
  Gd
};
