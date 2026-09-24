import { rc } from "./part-120.js";
import { y } from "./part-427.js";
import { Eb } from "./part-81.js";
let ec = (a, b, c) => {
  let f, d = a.events[b] ?? (f = {
    subscriptions: []
  }, f.subscriptions = [], f);
  a.events[b] = d;
  let e = Eb(d, c);
  if (b == "change") return () => {
    e();
    y.read((b2) => {
      if (d.subscriptions.length == 0) rc(a);
    }, false, false);
  };
  return e;
};
export {
  ec
};
