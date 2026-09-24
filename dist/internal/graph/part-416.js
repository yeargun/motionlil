import { scrollInfo } from "./part-410.js";
let Yj = (a) => {
  let b = {
    value: 0
  }, c = scrollInfo((c2) => {
    b.value = (a.axis === "x" ? c2.x : c2.y).progress * 100;
  }, a);
  return {
    currentTime: b,
    cancel: c
  };
};
export {
  Yj
};
