let P = (vk) => {
  if ("number" == typeof vk) return vk;
  if ("string" == typeof vk) return parseFloat(vk);
  return 0;
};
export {
  P
};
