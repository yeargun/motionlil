let si = (a, b) => {
  if (!Array.isArray(b)) return false;
  let c = b.length;
  if (a.length !== c) return false;
  for (let d = 0; d < c; ++d) if (b[d] !== a[d]) return false;
  return true;
};
export {
  si
};
