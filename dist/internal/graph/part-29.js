let Vc = (vk, wk, xk) => {
  let yk = 3 * xk, zk = 3 * wk;
  return (((1 - yk + zk) * vk + (yk - 6 * wk)) * vk + zk) * vk;
};
export {
  Vc
};
