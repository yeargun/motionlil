let dm = function(a, b) {
  if (!(b in a)) return false;
  let c = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(a), b) || Object.getOwnPropertyDescriptor(a, b);
  return !!c && typeof c.set == "function";
};
export {
  dm
};
