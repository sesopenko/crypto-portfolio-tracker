const currentVersion = 1;

export default (store: any) => {
  const storageVersion = localStorage.getItem('version');
  if (parseInt(storageVersion, 10) !== currentVersion) {
    // clear holdings
    localStorage.setItem('holdings', JSON.stringify([]));
    localStorage.setItem('version', JSON.stringify(currentVersion));
  }
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
      case 'deleteHolding':
      localStorage.setItem('holdings', JSON.stringify(state.holdings));
      break;
    }
  });
};
