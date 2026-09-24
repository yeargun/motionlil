let lc = (a, b) => {
  let c = a.dependents ?? [];
  a.dependents = c;
  if (!c.includes(b)) c.push(b);
};
export {
  lc
};
