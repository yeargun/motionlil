let kg = (a, b) => {
  a.dispatchEvent(new PointerEvent("pointer" + b, {
    isPrimary: true,
    bubbles: true
  }));
};
export {
  kg
};
