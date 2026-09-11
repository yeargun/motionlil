import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Wc = (vk) => (zk) => {
  if (zk <= 0.5) return vk(2 * zk) / 2;
  return (2 - vk(2 * (1 - zk))) / 2;
};
export {
  Wc
};
