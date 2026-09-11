import { addMatchMediaListener, hasWindow, matchMediaMatches } from "./../motion-dom/dom-host.js";
import { Ab } from "./part-550.js";
import { Cc } from "./part-551.js";
import { nk } from "./part-7.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let qg = () => {
  Cc.current = true;
  if (!hasWindow()) return;
  var vk = Ab;
  vk.current = matchMediaMatches(nk);
  addMatchMediaListener(nk, () => {
    let Ek = Ab;
    Ek.current = matchMediaMatches(nk);
  });
};
export {
  qg
};
