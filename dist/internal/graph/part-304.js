let rc = (vk) => {
  if (null == vk) return null;
  if ("number" == typeof vk) return vk;
  return null;
};
export {
  rc
};
