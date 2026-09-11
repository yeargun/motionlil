let V = (vk) => {
  if ("string" == typeof vk) return parseFloat(vk);
  if ("number" == typeof vk) return vk;
  return 0;
};
export {
  V
};
