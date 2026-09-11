import { A } from "./part-572.js";
import { Da } from "./part-605.js";
import { Ef } from "./part-607.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let ri = () => {
  let wk = [...A], yk = Da.correct, vk = {
    correct: null,
    applyTo: null,
    isCSSVariable: false
  };
  vk.correct = yk;
  vk.applyTo = wk;
  vk.isCSSVariable = false;
  Z.borderRadius = vk;
  Z.borderTopLeftRadius = Da;
  Z.borderTopRightRadius = Da;
  Z.borderBottomLeftRadius = Da;
  Z.borderBottomRightRadius = Da;
  Z.boxShadow = Ef;
};
var Z = {
  __proto__: null
};
ri();
export {
  Z,
  ri
};
