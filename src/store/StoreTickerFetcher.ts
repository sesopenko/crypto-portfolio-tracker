import { map, difference } from 'lodash';

export default (store: any) => {
  // Fetch initial ones
  store.subscribe((mutation: any, state: any) => {
    switch (mutation.type) {
      case 'setHolding':
      case 'setAllHoldings':
      // Fetch all tickers we don't currently have
      const holdingNames = map(state.holdings, 'name');
      const existingTickerNames = map(state.tickers, 'name');
      const missingTickerNames = difference(holdingNames, existingTickerNames);
      missingTickerNames.forEach((tickerName) => {
        const coinMarketCapUrl = `https://api.coinmarketcap.com/v1/ticker/${tickerName}/`;
        const corsProxyUrl = `https://cors-anywhere.herokuapp.com/${coinMarketCapUrl}`;
        fetch(coinMarketCapUrl).then((response) => {
          response.json().then((data) => {
            const tickerData = data[0];
            const ticker = {
              name: tickerName,
              symbol: tickerData.symbol,
              priceBtc: parseFloat(tickerData.price_btc),
              priceUsd: parseFloat(tickerData.price_usd),
            };
            store.commit('setTicker', ticker);
          });
        }).catch((err) => {
          // Just be silent
        });
      });
      break;
    }
  });
};
