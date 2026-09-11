import { xa } from "./part-497.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let cg = (vk, wk) => {
  if (xa.has(vk)) return (Ek) => {
    if (Ek <= 0) return vk;
    return wk;
  };
  else return (Ek) => {
    if (Ek >= 1) return wk;
    return vk;
  };
  throw Error();
};
export {
  cg
};
