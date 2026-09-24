import { Wd } from "./part-165.js";
import { Xd } from "./part-166.js";
let _d = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: function(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
  },
  scaleY: function(a) {
    return Math.sqrt(a[4] * a[4] + a[5] * a[5]);
  },
  scale: (a) => (Math.sqrt(a[0] * a[0] + a[1] * a[1]) + Math.sqrt(a[4] * a[4] + a[5] * a[5])) / 2,
  rotateX: (a) => Wd(Math.atan2(a[6], a[5]) * 180 / Math.PI),
  rotateY: (a) => Wd(Math.atan2(-a[2], a[0]) * 180 / Math.PI),
  rotateZ: Xd,
  rotate: Xd,
  skewX: (a) => Math.atan(a[4]) * 180 / Math.PI,
  skewY: (a) => Math.atan(a[1]) * 180 / Math.PI,
  skew: (a) => (Math.abs(a[1]) + Math.abs(a[4])) / 2
};
export {
  _d
};
