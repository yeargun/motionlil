import { m } from "./part-582.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let zj = (vk) => {
  if ("string" == typeof vk) {
    if ("x" == vk) {
      var wk, xk, yk = true;
    } else yk = "y" == vk;
    if (yk) {
      if ("x" == vk) {
        if (m.x) return null;
        m.x = true;
        return () => {
          m.x = false;
        };
      }
      if (m.y) return null;
      m.y = true;
      return () => {
        m.y = false;
      };
    }
  }
  if (m.x) xk = true;
  else {
    wk = m.y;
    xk = wk;
  }
  if (xk) return null;
  m.x = true;
  m.y = true;
  return () => {
    m.x = false;
    m.y = false;
  };
};
export {
  zj
};
