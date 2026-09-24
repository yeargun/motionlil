import { ra } from "./part-40.js";
import "./effect-499.js";
import "./effect-573.js";
let hslaToRgba = function(a) {
  let b = a.hue / 360, c = a.saturation / 100, d = a.lightness / 100, e = d, f = d, g = d;
  if (c != 0) {
    let a2 = d < 0.5 ? d * (1 + c) : d + c - d * c, h = 2 * d - a2;
    e = ra(h, a2, b + 1 / 3);
    f = ra(h, a2, b);
    g = ra(h, a2, b - 1 / 3);
  }
  return {
    red: Math.round(e * 255),
    green: Math.round(f * 255),
    blue: Math.round(g * 255),
    alpha: a.alpha
  };
};
export {
  hslaToRgba
};
