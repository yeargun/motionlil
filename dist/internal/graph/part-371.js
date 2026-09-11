let Ae = (vk, wk) => {
  var xk = vk[wk] ?? null;
  if (null != xk) return xk;
  var yk = vk.borderRadius ?? null;
  if (null != yk) return yk;
  return null;
};
export {
  Ae
};
