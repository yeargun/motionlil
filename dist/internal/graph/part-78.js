let O = (vk, wk, yk) => {
  var xk = vk[wk];
  if ("number" == typeof xk) return xk;
  return yk;
};
export {
  O
};
