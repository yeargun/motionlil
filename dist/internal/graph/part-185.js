import { ie } from "./part-177.js";
let we = (a) => {
  if (a.state == "scheduled") {
    ie(a);
    a.state = "pending";
  }
};
export {
  we
};
