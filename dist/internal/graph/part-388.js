let $i = function(a, b) {
  if (a.at == b.at) {
    if (a.value == null) return 1;
    if (b.value == null) return -1;
    return 0;
  }
  return a.at - b.at;
};
export {
  $i
};
