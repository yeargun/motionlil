let Yi = (a = null) => {
  if (a == null) return false;
  return "object" == typeof a && !Array.isArray(a);
};
export {
  Yi
};
