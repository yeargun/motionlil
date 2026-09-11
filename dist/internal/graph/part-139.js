let Zb = (vk) => {
  var wk = vk.current;
  if (null == wk) return;
  var zk = vk.buildHook;
  if (zk) zk();
  var yk = wk, Ak = vk.renderState, Bk = vk.props.style, Ck = vk.projection, xk = vk.renderInstanceHook;
  if (xk) xk(yk, Ak, Bk, Ck);
};
export {
  Zb
};
