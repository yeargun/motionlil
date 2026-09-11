let yh = (vk, Ck) => {
  var Dk = vk[12].get(Ck);
  if (!Dk) return false;
  var wk = Dk.oldBox, Hk = Dk.newBox;
  if (!wk) {
    var Ek, Gk, Ik, xk, yk, zk, Ak, Bk, Fk = true;
  } else {
    Ek = !Hk;
    Fk = Ek;
  }
  if (Fk) return false;
  Gk = wk;
  Ik = Hk;
  if (0 == Gk.height) yk = true;
  else {
    xk = 0 == Ik.height;
    yk = xk;
  }
  if (yk) return false;
  zk = Gk.width / Gk.height - Ik.width / Ik.height;
  if (zk < 0) {
    Ak = 0 - zk;
    Bk = Ak;
  } else Bk = zk;
  return Bk > 0.2;
};
export {
  yh
};
