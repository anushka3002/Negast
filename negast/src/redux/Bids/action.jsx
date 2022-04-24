import axios from 'axios'
export const GET_BIDS = 'GET_BIDS';

export const get_bids = (payload)=>{
    return {type: GET_BIDS,payload: payload}
}

export const get_bids_data = () => async (dispatch) => {
    try {
      const { data } = await axios.get(`https://negast.herokuapp.com/products`);
      dispatch(get_products(data));
    } catch (error) {
      console.log("Product Error from Redux", error);
    }
};
