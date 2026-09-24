import { resolveElements } from "./part-231.js";
import { Rf } from "./part-232.js";
let Sf = (a) => (b, c) => Rf(resolveElements(b).map((b2) => a(b2, c)));
export {
  Sf
};
