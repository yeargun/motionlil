import { X } from "./part-483.js";
import { tb } from "./part-484.js";
import { ga } from "./part-491.js";
let fd = (vk) => {
  if (X.test(vk)) return X.parse(vk);
  else {
    if (ga.test(vk)) return ga.parse(vk);
    else return tb.parse(vk);
  }
  throw Error();
};
export {
  fd
};
