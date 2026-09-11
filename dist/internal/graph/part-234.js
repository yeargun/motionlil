import { addWindowListener, removeWindowListener, windowInnerHeight, windowInnerWidth } from "./../motion-dom/dom-host.js";
import { Bk } from "./part-531.js";
import { Y } from "./part-590.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let nh = (vk) => {
  if (Y.indexOf(vk) == -1) Y.push(vk);
  if (!Ba) {
    Ba = () => {
      var Ok = windowInnerWidth(), Qk = windowInnerHeight(), Nk = {
        width: 0,
        height: 0
      };
      Nk.width = Ok;
      Nk.height = Qk;
      var Pk = 0;
      while (Pk < Y.length) {
        Y[Pk](Nk);
        Pk += 1;
      }
    };
    var wk = Ba;
    if (wk) addWindowListener("resize", wk);
  }
  return () => {
    var Ok = Y.indexOf(vk);
    if (Ok > -1) Y.splice(Ok, 1);
    if (0 == Y.length) {
      var Pk = Ba;
      if (Pk) {
        removeWindowListener("resize", Pk);
        Ba = null;
      }
    }
  };
};
var Ba = Bk;
export {
  Ba,
  nh
};
