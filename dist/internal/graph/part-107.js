import { F } from "./part-430.js";
let bc = (a, b) => {
  a.current = b;
  a.updatedAt = F.now();
  if (a.canTrackVelocity == null && b !== void 0) {
    let c = parseFloat(b);
    a.canTrackVelocity = c == c;
  }
};
export {
  bc
};
