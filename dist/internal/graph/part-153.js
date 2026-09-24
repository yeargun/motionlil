let Id = (a, b) => {
  a.values.delete(b);
  let c = a.valueSubscriptions, d = c.get(b) ?? null;
  if (d) {
    d();
    c.delete(b);
  }
  delete a.latestValues[b];
  a.renderer.removeValue(a.renderState, b);
};
export {
  Id
};
