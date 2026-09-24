let sk = function() {
  try {
    document.createElement("div").animate({
      opacity: 0
    }, {
      easing: "linear(0, 1)"
    });
  } catch (a) {
    return false;
  }
  return true;
};
export {
  sk
};
