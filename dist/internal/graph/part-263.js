let mc = (vk, Ak, Ck) => {
  var Bk = vk[9].get(Ak);
  if (!Bk) return [-1, 1];
  if ("old" == Ck) {
    var wk = Bk.oldPos;
    if (wk) return wk;
  } else {
    if ("new" == Ck) {
      var xk = Bk.newPos;
      if (xk) return xk;
    } else {
      var yk = Bk.newPos;
      if (yk) return yk;
      var zk = Bk.oldPos;
      if (zk) return zk;
    }
  }
  return [-1, 1];
};
export {
  mc
};
