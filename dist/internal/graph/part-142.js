let td = (vk) => {
  if (vk.isVariantNode) return vk;
  var wk = vk.parent;
  if (wk) return td(wk);
  return null;
};
export {
  td
};
