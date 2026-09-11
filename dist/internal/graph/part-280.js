let fe = (vk) => {
  if (null == vk) return false;
  if ("string" == typeof vk) return "0%" != vk;
  if ("number" == typeof vk) return 0 != vk;
  return true;
};
export {
  fe
};
