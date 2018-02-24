import Vue from 'vue';
import Vuex from 'vuex';

import { remove, findIndex } from 'lodash';


import { IHolding, IStoreState, ITicker } from '@/types';

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
    deleteHolding(state: IStoreState, holdingName: string) {
      const holdingIndex = findIndex(state.holdings, (comparison: IHolding) => {
        return comparison.name === holdingName;
      });
      if (holdingIndex !== -1) {
        state.holdings.splice(holdingIndex, 1);
      }
    },
    setHolding(state: IStoreState, holding: IHolding) {
      const isZeroValue = (holding.value === 0);
      if (isZeroValue) {
        const holdingIndex = findIndex(state.holdings, (comparison: IHolding) => {
          return comparison.name === holding.name;
        });
        if (holdingIndex !== -1) {
          state.holdings.splice(holdingIndex, 1);
        }
      } else {
        const existingIndex = findIndex(state.holdings, ['name', holding.name]);
        if (existingIndex === -1) {
          state.holdings.push(holding);
        } else {
          state.holdings[existingIndex].value = holding.value;
        }
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
    addHolding({ commit }, holding: IHolding) {
      commit('setHolding', holding);
    },
    deleteHolding({ commit }, holdingName: string) {
      commit('deleteHolding', holdingName);
    },
  },
});
