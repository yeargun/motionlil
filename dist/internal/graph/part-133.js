let hd = (a, b, c, d) => {
  let e = {}, f = {};
  if (d) d.values.forEach((a2, b2) => {
    e[b2] = a2.get();
    f[b2] = a2.getVelocity();
  });
  return a(c === void 0 ? b.custom : c, e, f);
};
export {
  hd
};
