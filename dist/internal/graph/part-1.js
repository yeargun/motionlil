let rk = function(a) {
  if (a == null) return [];
  return Array.from(a).filter((a2) => a2 != null);
};
export {
  rk
};
