let Me = (vk) => {
  var wk = vk.options.layoutId;
  if ("string" == typeof wk) return vk.root.sharedNodes.get(wk) ?? null;
  return null;
};
export {
  Me
};
