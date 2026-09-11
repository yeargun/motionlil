let Oe = (vk, wk, xk, yk) => {
  if (wk + xk > vk[0]) vk[0] = wk + xk;
  if (yk > vk[1]) vk[1] = yk;
};
export {
  Oe
};
