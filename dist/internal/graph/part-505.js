import { Xd } from "./part-166.js";
let $d = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (a) => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
  rotate: Xd,
  rotateZ: Xd,
  skewX: (a) => Math.atan(a[1]) * 180 / Math.PI,
  skewY: (a) => Math.atan(a[2]) * 180 / Math.PI,
  skew: (a) => (Math.abs(a[1]) + Math.abs(a[2])) / 2
};
export {
  $d
};
