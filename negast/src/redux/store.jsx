import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import { product_reducer } from "./products/reducer";
import { seller_reducer } from "./Seller/reducer"
import { buyer_reducer } from "./Buyer/reducer"

const rootReducers = combineReducers({
  products: product_reducer,
  seller: seller_reducer,
  buyer: buyer_reducer,
});

const loggerMiddlewares1 = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch);
  }
  next(action); 
};


export const store = createStore(
  rootReducers,
  applyMiddleware(loggerMiddlewares1),
);

