let Ie = (vk) => {
  if (!vk.layout) return false;
  if (vk.relativeTarget) {
    var wk, yk, zk, xk = true;
  } else {
    wk = !!vk.targetDelta;
    xk = wk;
  }
  if (xk) zk = true;
  else {
    yk = !!vk.options.layoutRoot;
    zk = yk;
  }
  if (zk) return true;
  return false;
};
export {
  Ie
};
