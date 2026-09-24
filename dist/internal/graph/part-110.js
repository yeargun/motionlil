let fc = (a) => {
  for (let b in a.events) {
    let c = a.events[b];
    if (c) c.subscriptions = [];
  }
};
export {
  fc
};
