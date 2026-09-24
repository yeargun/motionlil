let mc = (a, b) => {
  let c = a.dependents;
  if (c) {
    let a2 = c.indexOf(b);
    if (a2 > -1) c.splice(a2, 1);
  }
};
export {
  mc
};
