import { millisecondsToSeconds } from "./part-433.js";
import { Ia } from "./part-464.js";
import { calcGeneratorDuration } from "./part-55.js";
import "./effect-499.js";
import "./effect-573.js";
let createGeneratorEasing = function(a, b, c) {
  let d = c(Object.assign({}, a, {
    keyframes: [0, b]
  })), e = Math.min(calcGeneratorDuration(d), Ia);
  return {
    type: "keyframes",
    ease: (a2) => d.next(e * a2).value / b,
    duration: millisecondsToSeconds(e)
  };
};
export {
  createGeneratorEasing
};
