let ce = (a, b, c, d) => {
  let g = a.max - a.min;
  return b.boxSizing === "border-box" ? g : g - parseFloat(b[c] || "0") - parseFloat(b[d] || "0");
};
export {
  ce
};
