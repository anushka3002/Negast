import { GET_LOGIN_BUYER } from "./action";

const initstate = {login: false};

export const buyer_reducer = (store=initstate, {type,payload}) => {
  switch (type) {
    case GET_LOGIN_BUYER:
      return { ...store, login: payload };
    default:
      return store;
  }
}