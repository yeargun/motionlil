let xh = (a, b, c, d) => {
  let e = 2 * (1 - a) * (c.x - b.x) + 2 * a * (d.x - c.x);
  return Math.atan2(2 * (1 - a) * (c.y - b.y) + 2 * a * (d.y - c.y), e) * (180 / Math.PI);
};
export {
  xh
};
