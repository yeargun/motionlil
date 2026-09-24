import { resolveElements } from "./part-231.js";
let dg = (a, b) => {
  let c = new AbortController(), d = {
    passive: true
  };
  for (let a2 in b) d[a2] = b[a2];
  d.signal = c.signal;
  return {
    elements: resolveElements(a),
    eventOptions: d,
    cancel: () => {
      c.abort();
    }
  };
};
export {
  dg
};
