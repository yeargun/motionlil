let Ka = (vk) => ({
  test: (Fk) => {
    if (!("string" == typeof Fk)) return false;
    if (!Fk.endsWith(vk)) return false;
    var Dk, Gk = 0, Ek = 0;
    while (Gk < Fk.length) {
      if (" " == Fk.charAt(Gk)) Dk = Ek + 1 | 0;
      else Dk = Ek;
      Gk += 1;
      Ek = Dk;
    }
    return 0 == Ek;
  },
  parse: (Ck) => {
    if ("string" == typeof Ck) return parseFloat(Ck);
    if ("number" == typeof Ck) return Ck;
    return 0;
  },
  transform: (Dk) => `${Dk}${vk}`
});
export {
  Ka
};
