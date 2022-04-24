import axios from 'axios'
export const GET_BIDS = 'GET_BIDS';

export const get_bids = (payload)=>{
    return {type: GET_BIDS,payload: payload}
}

export const get_bids_data = (value) => async (dispatch) => {
    try {
      const { data } = await axios.get(`https://negast.herokuapp.com/bids/post/${value}`);
      dispatch(get_bids(data));
    } catch (error) {
      console.log("Product Error from Redux", error);
    }
};
