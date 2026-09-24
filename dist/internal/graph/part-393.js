let fj = (a, b) => {
  let c = b[a] ?? null;
  if (c) return c;
  let d = [];
  b[a] = d;
  return d;
};
export {
  fj
};
