let rd = (a, b) => {
  a.children.add(b);
  if (!a.enteringChildren) a.enteringChildren = /* @__PURE__ */ new Set();
  a.enteringChildren.add(b);
};
export {
  rd
};
