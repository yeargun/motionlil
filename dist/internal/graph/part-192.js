import { mapEasingToNativeEasing } from "./part-191.js";
import "./effect-499.js";
import "./effect-573.js";
let startWaapiAnimation = function(a, b, c, d, e) {
  let f = d || {}, g = f.duration ?? 300, h = f.repeat ?? 0, i = {};
  i[b] = c;
  if (f.times) i.offset = f.times;
  let j = mapEasingToNativeEasing(f.ease ?? "easeOut", g);
  if (Array.isArray(j)) i.easing = j;
  let k = {
    delay: f.delay ?? 0,
    duration: g,
    easing: Array.isArray(j) ? "linear" : j,
    fill: "both",
    iterations: h + 1,
    direction: f.repeatType === "reverse" ? "alternate" : "normal"
  };
  if (e) k.pseudoElement = e;
  return a.animate(i, k);
};
export {
  startWaapiAnimation
};
