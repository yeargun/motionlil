import { B } from "./part-74.js";
import { O } from "./part-78.js";
let db = (vk) => {
  let xk = O(vk, "red", 0), yk = O(vk, "green", 0), zk = O(vk, "blue", 0), wk = O(vk, "alpha", 1), Ak = {
    red: 0,
    green: 0,
    blue: 0,
    alpha: 0
  };
  B(Ak, xk, yk, zk, wk);
  return Ak;
};
export {
  db
};
