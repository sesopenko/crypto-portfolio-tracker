export default (store: any) => {
  const holdingsJson = localStorage.getItem('holdings');
  if (holdingsJson != null) {
    try {
      const holdings = JSON.parse(holdingsJson);
      window.setTimeout(() => {
        store.commit('setAllHoldings', holdings);
      }, 100);

    } catch (e) {
      // We'll sanitize this on the next save.
    }
  }
  store.subscribe((mutation: any, state: any) => {
    switch (mutation.type) {
      case 'setHolding':
      localStorage.setItem('holdings', JSON.stringify(state.holdings));
      break;
    }
  });
};
