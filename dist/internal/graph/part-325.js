let yh = (a, b, c, d) => {
  let e = b.x - a.x, f = b.y - a.y, g = Math.sqrt(e * e + f * f);
  if (g > 0) {
    let b2 = c * g;
    return {
      x: a.x + e * d + -f / g * b2,
      y: a.y + f * d + e / g * b2
    };
  }
  return {
    x: a.x,
    y: a.y
  };
};
export {
  yh
};
