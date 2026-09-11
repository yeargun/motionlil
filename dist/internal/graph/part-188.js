import { getComputedStyleProperty } from "./../motion-dom/dom-host.js";
import { Rg } from "./part-187.js";
import { W } from "./part-466.js";
import { lk } from "./part-5.js";
import { ad } from "./part-56.js";
import { ed } from "./part-72.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let Md = (vk, yk, zk = 1) => {
  W(zk <= 4, `Max CSS variable fallback depth detected in property "${vk}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  var Ck = Rg(vk), Ak = Ck[0], wk = Ck[1];
  if (!("string" == typeof Ak)) return null;
  if (Ak == lk) return null;
  var Bk = getComputedStyleProperty(yk, Ak);
  if (Bk != lk) {
    var xk = Bk.trim();
    if (ad(xk)) return parseFloat(xk);
    return xk;
  }
  if ("string" == typeof wk && ed(wk)) return Md(wk, yk, zk + 1);
  return wk;
};
export {
  Md
};
