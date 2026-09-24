let Kg = () => {
  let a = Og;
  Og = a + 1;
  return `motion-view-${a}`;
};
let Og = 0;
export {
  Kg,
  Og
};
