import { isDragActive } from "./part-239.js";
import { cg } from "./part-528.js";
import "./effect-499.js";
import "./effect-573.js";
let setDragLock = function(a) {
  if (a === "x" || a === "y") {
    if (cg[a]) return null;
    cg[a] = true;
    return () => {
      cg[a] = false;
    };
  }
  if (isDragActive()) return null;
  cg.x = true;
  cg.y = true;
  return () => {
    cg.x = false;
    cg.y = false;
  };
};
export {
  setDragLock
};
