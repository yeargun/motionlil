let Bi = (vk) => {
  var xk, wk, Ak, Bk, zk = [], yk = 0;
  for (; yk < vk.path.length; yk = yk + 1) {
    xk = vk.path[yk];
    wk = {
      projectionDelta: null,
      options: null,
      scroll: null,
      isRoot: false,
      latestValues: {},
      layoutBox: null
    };
    Bk = null;
    wk.layoutBox = Bk;
    wk.projectionDelta = xk.projectionDelta;
    wk.options = xk.options;
    wk.scroll = xk.scroll;
    wk.isRoot = xk.root == xk;
    wk.latestValues = xk.latestValues;
    Ak = xk.layout;
    if (Ak) wk.layoutBox = Ak.layoutBox;
    zk.push(wk);
  }
  return zk;
};
export {
  Bi
};
