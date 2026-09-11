let Cg = (vk) => {
  if ("reverse" == vk) return 1;
  else {
    if ("mirror" == vk) return 2;
  }
  return 0;
};
export {
  Cg
};
