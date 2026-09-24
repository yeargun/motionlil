function dk(a) {
  return function() {
    return a(this);
  };
}
export {
  dk
};
