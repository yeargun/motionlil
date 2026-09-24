import { Ie } from "./part-196.js";
import { Oe, Re } from "./part-202.js";
import { Rl } from "./part-8.js";
import "./effect-499.js";
import "./effect-573.js";
let Jf = (a, b) => {
  Re(a, null, Hf);
  a.animation = b;
  b.onfinish = () => {
    a.finishedTime = Ie(a);
    a._resolve();
  };
};
let Hf = Object.create(Oe);
let If = Rl((a, b) => {
  let c = {};
  Jf(c, a);
  return c;
}, Hf, {});
export {
  Hf,
  If,
  Jf
};
