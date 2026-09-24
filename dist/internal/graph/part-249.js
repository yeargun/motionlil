import { jg } from "./part-247.js";
import { kg } from "./part-248.js";
import { ig } from "./part-531.js";
let lg = (a, b) => {
  let c = a.currentTarget;
  if (!c) return;
  let e = jg((a2) => {
    if (ig.has(c)) return;
    kg(c, "down");
    c.addEventListener("keyup", jg((a3) => {
      kg(c, "up");
    }), b);
    c.addEventListener("blur", () => {
      kg(c, "cancel");
    }, b);
  });
  c.addEventListener("keydown", e, b);
  c.addEventListener("blur", () => {
    c.removeEventListener("keydown", e);
  }, b);
};
export {
  lg
};
