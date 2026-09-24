import { vd } from "./part-144.js";
let ud = (a) => {
  let b = a.current;
  if (!b) return;
  a.renderer.build(a);
  vd(a, b, a.renderState, a.props.style, a.projection);
};
export {
  ud
};
