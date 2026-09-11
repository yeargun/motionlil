let pi = (vk, wk, xk) => {
  if ("initial" == wk) vk.initial = xk;
  else {
    if ("animate" == wk) vk.animate = xk;
    else {
      if ("exit" == wk) vk.exit = xk;
      else {
        if ("whileHover" == wk) vk.whileHover = xk;
        else {
          if ("whileDrag" == wk) vk.whileDrag = xk;
          else {
            if ("whileFocus" == wk) vk.whileFocus = xk;
            else {
              if ("whileTap" == wk) vk.whileTap = xk;
              else {
                if ("whileInView" == wk) vk.whileInView = xk;
              }
            }
          }
        }
      }
    }
  }
};
export {
  pi
};
