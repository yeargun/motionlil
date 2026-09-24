import { y } from "./part-427.js";
import { F } from "./part-430.js";
let wd = (a) => {
  let c = F.now();
  if (a.renderScheduledAt < c) {
    a.renderScheduledAt = c;
    y.render(a.render, false, true);
  }
};
export {
  wd
};
