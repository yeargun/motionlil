let aa = (vk, wk) => {
  var xk = vk.values.get(wk);
  if (xk) return xk.value;
  return null;
};
export {
  aa
};
