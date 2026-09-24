import { O } from "./part-28.js";
import { R } from "./part-29.js";
import { S } from "./part-30.js";
import { T } from "./part-31.js";
import { M } from "./part-437.js";
import "./effect-499.js";
import "./effect-573.js";
let V = {
  test: R("rgb", "red"),
  parse: S("red", "green", "blue"),
  transform: (a) => `rgba(${T(a.red)}, ${T(a.green)}, ${T(a.blue)}, ${O(M.transform(a.alpha ?? 1))})`
};
export {
  V
};
