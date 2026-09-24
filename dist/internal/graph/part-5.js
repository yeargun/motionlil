let Al = function(a) {
  return typeof HTMLElement != "undefined" && a instanceof HTMLElement || typeof SVGElement != "undefined" && a instanceof SVGElement;
};
export {
  Al
};
