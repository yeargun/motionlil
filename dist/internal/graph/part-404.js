let Oa = (vk) => {
  if (null == vk) return false;
  if ("object" == typeof vk) {
    var wk = !Array.isArray(vk), xk = wk;
  } else xk = false;
  return xk;
};
export {
  Oa
};
