import { Q } from "./part-440.js";
let R = (a, b = null) => (c) => typeof c == "string" && Q.test(c) && c.startsWith(a) || b != null && c != null && Object.hasOwn(c, b);
export {
  R
};
