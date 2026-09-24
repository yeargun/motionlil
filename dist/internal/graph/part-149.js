import { ec } from "./part-109.js";
import { isMotionValue } from "./part-126.js";
let Cd = (a) => {
  let c = a.childSubscription;
  if (c) {
    c();
    delete a.childSubscription;
  }
  let d = a.props.children;
  if (isMotionValue(d)) a.childSubscription = ec(d, "change", (b, c2, d2) => {
    if (a.current) a.current.textContent = b + "";
  });
};
export {
  Cd
};
