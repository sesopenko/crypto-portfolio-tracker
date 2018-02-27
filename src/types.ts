export interface IHolding {
  name: string;
  value: number;
  location: string;
  uuid: string;
}

export interface IHoldingCreation {
  name: string;
  value: number;
  location: string;
}

export interface ITicker {
  name: string;
  symbol: string;
  priceBtc: number;
  priceUsd: number;
}

export interface IStoreState {
    holdings: IHolding[];
    tickers: ITicker[];
}
