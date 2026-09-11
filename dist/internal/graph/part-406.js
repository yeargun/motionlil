let Ne = (vk, wk) => {
  var xk = vk.entries.get(wk);
  if (xk) return xk;
  var yk = [];
  vk.entries.set(wk, yk);
  vk.keys.push(wk);
  return yk;
};
export {
  Ne
};
