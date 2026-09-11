let Ja = (vk) => {
  if (!("object" == typeof vk)) return false;
  if (Array.isArray(vk)) return false;
  for (var wk in vk) {
    if ("hue" == wk) return true;
  }
  return false;
};
export {
  Ja
};
