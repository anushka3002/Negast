import { GET_POST } from "./action";

const initstate = { post: [] };

export const post_reducer = (store = initstate, { type, payload }) => {
  switch (type) {
    case GET_POST:
      return { ...store, post: payload };
    default:
      return store;
  }
};
