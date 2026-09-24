import { O } from "./part-28.js";
import { R } from "./part-29.js";
import { S } from "./part-30.js";
import { M } from "./part-437.js";
import "./effect-499.js";
import "./effect-573.js";
let Y = {
  test: R("hsl", "hue"),
  parse: S("hue", "saturation", "lightness"),
  transform: (a) => `hsla(${Math.round(a.hue)}, ${O(a.saturation)}%, ${O(a.lightness)}%, ${O(M.transform(a.alpha ?? 1))})`
};
export {
  Y
};
