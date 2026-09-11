let Q = (vk, wk, yk) => {
  if (!("object" == typeof vk)) return yk;
  var xk = vk[wk];
  if ("number" == typeof xk) return xk;
  if ("string" == typeof xk) return parseFloat(xk);
  return yk;
};
export {
  Q
};
