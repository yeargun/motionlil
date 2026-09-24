import { wi } from "./part-363.js";
import "./effect-499.js";
import "./effect-573.js";
let buildProjectionTransform = function(a, b, c) {
  let d = "", e = a.x.translate / b.x, f = a.y.translate / b.y, g = c && c.z || 0;
  if (e || (f || g)) d = `translate3d(${e}px, ${f}px, ${g}px) `;
  if (b.x != 1 || b.y != 1) d = d + `scale(${1 / b.x}, ${1 / b.y}) `;
  if (c) {
    let a2 = c.transformPerspective;
    if (a2) d = `perspective(${a2}px) ${d}`;
    d = d + (wi(c, "rotate", "rotate") + wi(c, "pathRotation", "rotate") + wi(c, "rotateX", "rotateX") + wi(c, "rotateY", "rotateY") + wi(c, "skewX", "skewX") + wi(c, "skewY", "skewY"));
  }
  let h = a.x.scale * b.x, i = a.y.scale * b.y;
  if (h != 1 || i != 1) d = d + `scale(${h}, ${i})`;
  return d == "" ? "none" : d;
};
export {
  buildProjectionTransform
};
