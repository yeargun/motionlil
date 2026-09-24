import { wf, zf } from "./part-216.js";
import { fk } from "./part-476.js";
import { Rl } from "./part-8.js";
import "./effect-499.js";
import "./effect-573.js";
let Ff = (a, b) => {
  zf(a, b, Cf);
};
let Cf = Object.create(wf);
let Ef = Rl((a, b) => {
  let d = {
    animations: []
  };
  Ff(d, a);
  return d;
}, Cf, {
  then: {
    value: fk((a, b) => a.finished.finally(b).then(() => {
    }))
  }
});
export {
  Cf,
  Ef,
  Ff
};
