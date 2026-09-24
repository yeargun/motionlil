import { addUniqueItem } from "./part-78.js";
import { removeItem } from "./part-79.js";
let Eb = (a, b) => {
  addUniqueItem(a.subscriptions, b);
  return () => removeItem(a.subscriptions, b);
};
export {
  Eb
};
