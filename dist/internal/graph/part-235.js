import { invoke1, invoke2, isFunction } from "./../motion-dom/dom-host.js";
import { mh } from "./part-233.js";
import { nh } from "./part-234.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let oh = (vk, wk) => {
  if (isFunction(vk)) return nh((Ek) => {
    invoke1(vk, Ek);
  });
  return mh(vk, (Ek, Fk) => {
    if (null != wk) invoke2(wk, Ek, Fk);
  });
};
export {
  oh
};
