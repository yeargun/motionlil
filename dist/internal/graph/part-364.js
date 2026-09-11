let nb = (vk, wk) => {
  var xk = vk[wk];
  if ("number" == typeof xk) return xk;
  return 0;
};
export {
  nb
};
