let Rg = () => {
  if (!Ug) {
    Ug = document.createElement("style");
    Ug.id = "motion-view";
  }
  let a = "";
  for (let b in Tg) {
    let c = Tg[b];
    a = a + `${b} {
`;
    for (let b2 in c) a = a + `  ${b2}: ${c[b2]};
`;
    a = a + "}\n";
  }
  Ug.textContent = a;
  document.head.appendChild(Ug);
  Tg = {};
};
let Tg = {};
let Ug = null;
export {
  Rg,
  Tg,
  Ug
};
