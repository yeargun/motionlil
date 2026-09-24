import { measureViewportBox } from "./part-105.js";
import { createBox } from "./part-87.js";
let zd = (a) => {
  let b = a.current;
  if (b && a.type === "html") return measureViewportBox(b, a.props.transformPagePoint);
  return createBox();
};
export {
  zd
};
