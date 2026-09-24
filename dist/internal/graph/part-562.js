let Yh = {
  build: (a) => {
    let b = a.renderState.output, c = a.latestValues;
    for (let a2 in c) b[a2] = c[a2];
  },
  render: (a, b, c, d) => {
    let e = b.output;
    for (let b2 in e) a[b2] = e[b2];
  },
  scrape: (a, b, c) => ({}),
  read: (a, b, c) => {
    if (c in b) {
      let a2 = b[c];
      if (typeof a2 == "string" || typeof a2 == "number") return a2;
    }
  },
  baseTarget: (a, b) => {
  },
  removeValue: (a, b) => {
    delete a.output[b];
  }
};
export {
  Yh
};
