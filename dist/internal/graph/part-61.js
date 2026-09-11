import "./effect-580.js";
import "./effect-614.js";
import "./effect-617.js";
let qj = (vk, xk, yk, zk) => {
  var wk = [vk, xk];
  if (yk) wk.push(yk);
  if (zk) wk.push(zk);
  return (Mk) => {
    var Nk, Ok = Mk, Pk = 0;
    while (Pk < wk.length) {
      Nk = wk[Pk](Ok);
      Ok = Nk;
      Pk += 1;
    }
    return Ok;
  };
};
export {
  qj
};
