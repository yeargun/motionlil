let Yd = (vk, wk, xk) => {
  if (!vk[5].has(wk)) vk[6].push(wk);
  vk[5].set(wk, xk);
};
export {
  Yd
};
