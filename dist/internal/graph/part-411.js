let Ki = (vk) => {
  if (null == vk) {
    var wk, zk, yk, xk = true;
  } else {
    wk = !Array.isArray(vk);
    xk = wk;
  }
  if (xk) return false;
  for (zk = vk.length | 0, yk = 0; yk < zk; yk = yk + 1) {
    if (Array.isArray(vk[yk])) return true;
  }
  return false;
};
export {
  Ki
};
