import { GET_BIDS } from "./action";

const initstate = { bids: [] };

export const bids_reducer = (store = initstate, { type, payload }) => {
  switch (type) {
    case GET_BIDS:
      return { ...store, bids: payload };
    default:
      return store;
  }
};