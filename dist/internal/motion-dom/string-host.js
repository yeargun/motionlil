function stringMatch(s, re) {
  return s.match(re);
}
function stringReplace(s, re, replacement) {
  return s.replace(re, replacement);
}
function stringSplit(s, sep) {
  return s.split(sep);
}
function stringSubstring(s, start, end) {
  if (end === void 0) return s.substring(start);
  return s.substring(start, end);
}
function stringTrim(s) {
  return s.trim();
}
function isNaNNumber(v) {
  return isNaN(v);
}
function arrayFrom(list) {
  return Array.from(list);
}
export {
  arrayFrom,
  isNaNNumber,
  stringMatch,
  stringReplace,
  stringSplit,
  stringSubstring,
  stringTrim
};
