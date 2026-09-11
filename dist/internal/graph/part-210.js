let bh = (vk) => {
  if ("x" == vk) return "translateX";
  if ("y" == vk) return "translateY";
  if ("z" == vk) return "translateZ";
  if ("transformPerspective" == vk) return "perspective";
  return vk;
};
export {
  bh
};
