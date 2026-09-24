let tk = function() {
  try {
    document.createElement("div").animate({
      opacity: [1]
    });
  } catch (a) {
    return false;
  }
  return true;
};
export {
  tk
};
