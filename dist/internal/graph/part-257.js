import { vg } from "./part-534.js";
let ug = (a) => {
  vg.add(a);
  if (!wg) {
    wg = () => {
      let a2 = {
        width: window.innerWidth,
        height: window.innerHeight
      };
      vg.forEach((b) => {
        b(a2);
      });
    };
    window.addEventListener("resize", wg);
  }
  return () => {
    vg.delete(a);
    if (!vg.size && typeof wg == "function") {
      window.removeEventListener("resize", wg);
      wg = void 0;
    }
  };
};
let wg;
export {
  ug,
  wg
};
