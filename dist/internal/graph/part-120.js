import { dc } from "./part-108.js";
let rc = (a) => {
  let b = a.animation;
  if (b != null) {
    if (typeof b.stop == "function") b.stop();
    else {
      let a2 = b.stopActive;
      if (typeof a2 == "function") a2();
    }
    dc(a, "animationCancel");
  }
  a.animation = null;
};
export {
  rc
};
