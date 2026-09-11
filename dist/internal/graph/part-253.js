import { callMethod1, documentCreateElement, documentHead } from "./../motion-dom/dom-host.js";
import { lk } from "./part-5.js";
import { Bk } from "./part-531.js";
let th = () => {
  if (null == Za) {
    var vk = documentCreateElement("style");
    vk.id = "motion-view";
    Za = vk;
  }
  var Gk, Dk, Ek, wk, Hk, Jk, xk, yk, Fk, zk, Ak, Bk2, Ck = lk, Ik = 0;
  for (; Ik < Ya.length; ) {
    Gk = Ya[Ik] || "";
    Dk = Xa.get(Gk);
    if (Dk !== void 0) {
      Ek = Dk;
      wk = Ck + `${Gk} {
`;
      Ak = wk;
      for (Hk in Ek) {
        Jk = Ek[Hk];
        if ("string" == typeof Jk) {
          xk = Ak + `  ${Hk}: ${Jk};
`;
          zk = xk;
        } else zk = Ak;
        Ak = zk;
      }
      yk = Ak + "}\n";
      Bk2 = yk;
    } else Bk2 = Ck;
    Ck = Bk2;
    Ik += 1;
  }
  Fk = Za;
  if (null != Fk) {
    Fk.textContent = Ck;
    callMethod1(documentHead(), "appendChild", Fk);
  }
  Xa = /* @__PURE__ */ new Map();
  Ya = [];
};
var Xa = /* @__PURE__ */ new Map();
var Ya = [];
var Za = Bk;
export {
  Xa,
  Ya,
  Za,
  th
};
