let ug = (vk, wk, xk) => {
  var yk = vk.getBaseTargetFromPropsHook;
  if (yk) return yk(wk, xk);
  return null;
};
export {
  ug
};
