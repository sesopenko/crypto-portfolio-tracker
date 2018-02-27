import Vue from 'vue';
import Vuex from 'vuex';

import { IHolding, IHoldingCreation, IStoreState, ITicker } from '@/types';
import { remove, findIndex } from 'lodash';

import StoreLocalStorage from '@/store/StoreLocalStorage';
import StoreTickerFetcher from '@/store/StoreTickerFetcher';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    StoreLocalStorage,
    StoreTickerFetcher,
  ],
  state: {
    holdings: [],
    tickers: [],
  },
  mutations: {
    deleteHolding(state: IStoreState, uuid: string) {
      console.log('deleting holding:', uuid);
      const holdingIndex = findIndex(state.holdings, (comparison: IHolding) => {
        return comparison.uuid === uuid;
      });
      if (holdingIndex !== -1) {
        state.holdings.splice(holdingIndex, 1);
      }
    },
    setHolding(state: IStoreState, holding: IHolding) {
      const isZeroValue = (holding.value === 0);
      if (!isZeroValue) {
        state.holdings.push(holding);
      }
    },
    setAllHoldings(state: IStoreState, holdings: IHolding[]) {
      state.holdings = holdings;
    },
    setTicker(state: IStoreState, ticker: ITicker) {
      const existingIndex = findIndex(state.tickers, ['name', ticker.name]);
      if (existingIndex === -1) {
          state.tickers.push(ticker);
        } else {
          state.tickers.splice(existingIndex, 1, ticker);
        }
    },
  },
  actions: {
    addHolding({ commit }, holding: IHoldingCreation) {
      const mtime = Date.now();
      const uuid = `${holding.name}-${holding.location}-${mtime}`;
      commit('setHolding', {
        name: holding.name,
        value: holding.value,
        location: holding.location,
        uuid,
      });
    },
    deleteHolding({ commit }, uuid: string) {
      commit('deleteHolding', uuid);
    },
  },
});
