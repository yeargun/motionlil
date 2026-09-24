import { Eb } from "./part-81.js";
let Pd = (a, b, c) => {
  let d = a.events;
  if (!d[b]) d[b] = {
    subscriptions: []
  };
  return Eb(d[b], c);
};
export {
  Pd
};
