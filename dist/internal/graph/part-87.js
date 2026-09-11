import { h } from "./part-492.js";
import { jf } from "./part-494.js";
import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let La = (vk) => {
  let zk = `${vk}`, wk = [0, [], null, []];
  wk[0] = 0;
  wk[1] = [];
  let yk = {
    color: [],
    number: [],
    varIndexes: []
  };
  yk.color = [];
  yk.number = [];
  yk.varIndexes = [];
  wk[2] = yk;
  wk[3] = [];
  let Ak = zk.replace(jf, (Sk) => {
    if (h.test(Sk)) {
      wk[2].color.push(wk[0]);
      wk[3].push("color");
      var Tk = wk[1];
      Tk.push(h.parse(Sk));
    } else {
      if (Sk.startsWith("var(")) {
        wk[2].varIndexes.push(wk[0]);
        wk[3].push("var");
        wk[1].push(Sk);
      } else {
        wk[2].number.push(wk[0]);
        wk[3].push("number");
        var Uk = wk[1];
        Uk.push(parseFloat(Sk));
      }
    }
    wk[0] = wk[0] + 1 | 0;
    return "${}";
  }).split("${}"), Bk = wk[2], Ck = wk[3], Gk = wk[1], xk = {
    values: [],
    split: [],
    indexes: null,
    types: []
  };
  xk.values = Gk;
  xk.split = Ak;
  xk.indexes = Bk;
  xk.types = Ck;
  return xk;
};
export {
  La
};
