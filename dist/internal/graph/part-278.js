let nc = (vk) => {
  if (null == vk) return true;
  if ("number" == typeof vk) return 1 == vk;
  return false;
};
export {
  nc
};
