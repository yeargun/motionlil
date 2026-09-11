let vg = (vk, xk, yk) => {
  var zk = vk.removeValueFromRenderStateHook;
  if (zk) {
    zk(xk, yk);
    return;
  }
  var wk = yk.style, Ak = yk.vars, Bk = yk.output, Ck = yk.attrs;
  if ("object" == typeof wk) wk[xk] = null;
  if ("object" == typeof Ak) Ak[xk] = null;
  if ("object" == typeof Bk) Bk[xk] = null;
  if ("object" == typeof Ck) Ck[xk] = null;
};
export {
  vg
};
