let M = (vk, wk, xk, yk, zk) => {
  if (!vk[0]) {
    var Ak = vk[4];
    if (Ak) Ak();
  }
  return wk.schedule(xk, yk, zk);
};
export {
  M
};
