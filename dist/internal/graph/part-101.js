let eg = (vk, wk) => {
  var Kk = [], xk = [0, 0, 0];
  xk[0] = 0;
  xk[1] = 0;
  xk[2] = 0;
  var yk, zk, Ak, Bk, Lk, Mk, Ck, Dk, Ek, Fk, Gk, Hk, Ik, Jk = 0;
  for (; Jk < wk.values.length; ) {
    yk = wk.types[Jk] || "";
    if ("color" == yk) {
      if (xk[0] < vk.indexes.color.length) {
        zk = vk.indexes.color[xk[0]] | 0;
        Hk = zk;
      } else Hk = -1;
      xk[0] = xk[0] + 1 | 0;
      Fk = Hk;
    } else {
      if ("var" == yk) {
        if (xk[1] < vk.indexes.varIndexes.length) {
          Ak = vk.indexes.varIndexes[xk[1]] | 0;
          Gk = Ak;
        } else Gk = -1;
        xk[1] = xk[1] + 1 | 0;
        Ek = Gk;
      } else {
        if (xk[2] < vk.indexes.number.length) {
          Bk = vk.indexes.number[xk[2]] | 0;
          Dk = Bk;
        } else Dk = -1;
        xk[2] = xk[2] + 1 | 0;
        Ek = Dk;
      }
      Fk = Ek;
    }
    if (Fk >= 0) {
      Lk = Fk < vk.values.length;
      Mk = Lk;
    } else Mk = false;
    if (Mk) {
      Ck = vk.values[Fk];
      Ik = Ck;
    } else Ik = 0;
    Kk.push(Ik);
    Jk += 1;
  }
  return Kk;
};
export {
  eg
};
