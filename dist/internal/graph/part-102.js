let Vb = (a, b) => {
  if (typeof a == "string") return parseFloat(a) / 100 * (b.max - b.min);
  return a;
};
export {
  Vb
};
