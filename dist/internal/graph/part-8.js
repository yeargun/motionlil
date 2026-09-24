let Rl = function(a, b, c) {
  let d = function(b2) {
    return a(b2, arguments[1]);
  };
  for (let a2 in c) {
    let b2 = c[a2];
    b2.configurable = true;
    if ("value" in b2) b2.writable = true;
  }
  d.prototype = Object.defineProperties(b, c);
  Object.defineProperty(b, "constructor", {
    value: d,
    writable: true,
    configurable: true
  });
  return d;
};
export {
  Rl
};
