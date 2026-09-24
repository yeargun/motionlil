let ra = (a, b, c) => {
  if (c < 0) ++c;
  if (c > 1) --c;
  if (c < 1 / 6) return a + (b - a) * 6 * c;
  if (c < 0.5) return b;
  if (c < 2 / 3) return a + (b - a) * (2 / 3 - c) * 6;
  return a;
};
export {
  ra
};
