let dj = (a, b, c) => {
  let d = b + 1 + b * c;
  for (let b2 = 0; b2 < a.length; ++b2) a[b2] = a[b2] / d;
};
export {
  dj
};
