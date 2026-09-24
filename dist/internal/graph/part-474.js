function ek(a) {
  return function(b, c) {
    return a(this, b, c);
  };
}
export {
  ek
};
