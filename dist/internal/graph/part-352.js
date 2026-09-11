let mi = (vk, wk) => {
  if (null == wk) return false;
  if (!Array.isArray(vk)) {
    var xk, zk, Bk, Ck, Ak, yk = true;
  } else {
    xk = !Array.isArray(wk);
    yk = xk;
  }
  if (yk) return vk == wk;
  zk = vk.length;
  if (zk != wk.length) return false;
  for (Bk = vk.length | 0, Ak = 0; Ak < Bk; Ak = Ak + 1) {
    Ck = vk[Ak];
    if (Ck != wk[Ak]) return false;
  }
  return true;
};
export {
  mi
};
