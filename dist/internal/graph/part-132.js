let sg = (vk, wk, xk, yk) => {
  var zk = vk.scrapeMotionValuesFromPropsHook;
  if (zk) return zk(wk, xk, yk);
  return {
    __proto__: null
  };
};
export {
  sg
};
