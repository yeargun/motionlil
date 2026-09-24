import { Pi } from "./part-571.js";
let Ki = (a) => {
  if (a == null) return null;
  if (!a) return null;
  let b = a.id;
  if (typeof b == "number") return Pi.get(b | 0) ?? null;
  return null;
};
export {
  Ki
};
