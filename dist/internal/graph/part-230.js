let Pf = (a, b) => {
  let c = a.values.get(b) ?? null;
  return c ? c[0] : null;
};
export {
  Pf
};
