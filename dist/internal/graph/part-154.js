let bc = (vk, wk) => {
  if ("linear" == wk) return vk.linear;
  if ("ease" == wk) return vk.ease;
  if ("easeIn" == wk) return vk.easeIn;
  if ("easeOut" == wk) return vk.easeOut;
  if ("easeInOut" == wk) return vk.easeInOut;
  return null;
};
export {
  bc
};
