import { j } from "./part-568.js";
let Ld = (vk) => {
  if ("scheduled" == vk.state) {
    var xk, wk = j.length - 1, yk = wk;
    while (yk >= 0) {
      if (j[yk] == vk) j.splice(yk, 1);
      xk = yk - 1;
      yk = xk;
    }
    vk.state = "pending";
  }
};
export {
  Ld
};
