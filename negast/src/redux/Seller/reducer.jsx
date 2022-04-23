import { GET_LOGIN_SELLER } from "./action";

const initstate = {login: false};

export const seller_reducer = (store=initstate, {type,payload}) => {
  switch (type) {
    case GET_LOGIN_SELLER:
      return { ...store, login: payload };
    default:
      return store;
  }
}