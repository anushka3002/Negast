import axios from 'axios';
export const GET_LOGIN_BUYER = "GET_LOGIN_BUYER";

export const get_login_buyer = (payload)=>{
return {type: GET_LOGIN_BUYER,payload: payload}
}

export const get_login_user = (form) => async (dispatch) => {
    try {
      const { data } = await axios.post(`https://negast.herokuapp.com/buyers/login`,form);
      dispatch(get_login_buyer(data));
    } catch (error) {
      console.log("Buyers Error From Redux", error);
    }
  };

  export const get_register_user = (form) => async (dispatch) => {
    try {
      const { data } = await axios.post(`https://negast.herokuapp.com/buyers/register`,form);
      dispatch(get_login_buyer(data));
    } catch (error) {
      console.log("Seller Register Error From Redux", error);
    }
  };