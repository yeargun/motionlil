let wg = (vk, wk) => {
  vk.children.add(wk);
  var xk = vk.enteringChildren;
  if (!xk) {
    var yk = /* @__PURE__ */ new Set();
    yk.add(wk);
    vk.enteringChildren = yk;
  } else xk.add(wk);
};
export {
  wg
};
