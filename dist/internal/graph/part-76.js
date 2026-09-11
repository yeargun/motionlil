let Ia = (vk) => {
  if (!("object" == typeof vk)) return false;
  if (Array.isArray(vk)) return false;
  for (var wk in vk) {
    if ("red" == wk) return true;
  }
  return false;
};
export {
  Ia
};
