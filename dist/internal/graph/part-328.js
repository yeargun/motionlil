let Ch = (a, b) => {
  let c = Array.isArray(a) ? a[a.length - 1] : a;
  return Array.isArray(a) ? c : c ?? b;
};
export {
  Ch
};
