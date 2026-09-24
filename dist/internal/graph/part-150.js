let Fd = (a) => {
  if (a.isVariantNode) return a;
  let c = a.parent;
  if (!c) return;
  return Fd(c);
};
export {
  Fd
};
