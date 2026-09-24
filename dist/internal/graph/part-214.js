let uf = (a, b) => {
  let c = a.animations, d = 0;
  for (let a2 = 0; a2 < c.length; ++a2) {
    let e = c[a2][b];
    if (e !== null && e > d) d = e;
  }
  return d;
};
export {
  uf
};
