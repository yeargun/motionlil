let u = (a) => {
  let b = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), e = false, f = false, g = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  }, h = (i) => {
    g = i;
    if (e) {
      f = true;
      return;
    }
    e = true;
    let j = b;
    b = c;
    c = j;
    b.forEach((b2) => {
      if (d.has(b2)) {
        c.add(b2);
        a();
      }
      b2(g);
    });
    b.clear();
    e = false;
    if (f) {
      f = false;
      h(i);
    }
  };
  return {
    schedule: (a2, f2, g2) => {
      if (f2) d.add(a2);
      (g2 && e ? b : c).add(a2);
      return a2;
    },
    cancel: (a2) => {
      c.delete(a2);
      d.delete(a2);
    },
    process: h
  };
};
export {
  u
};
