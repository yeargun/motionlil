import "./effect-499.js";
import "./effect-573.js";
let wrap = (a, b, c) => {
  let d = b - a;
  return ((c - a) % d + d) % d + a;
};
export {
  wrap
};
