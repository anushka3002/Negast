import axios from 'axios';
export const GET_LOGIN_SELLER = "GET_LOGIN_SELLER";

export const get_login_seller = (payload)=>{
return {type: GET_LOGIN_SELLER,payload: payload}
}

export const get_login_vendor = (form) => async (dispatch) => {
    try {
      const { data } = await axios.post(`https://negast.herokuapp.com/sellers/login`,form);
      dispatch(get_login_seller(data));
    } catch (error) {
      console.log("Seller Login Error From Redux", error);
    }
  };

  export const get_register_vendor = (form) => async (dispatch) => {
    try {
      const { data } = await axios.post(`https://negast.herokuapp.com/sellers/register`,form);
      dispatch(get_login_seller(data));
    } catch (error) {
      console.log("Seller Register Error From Redux", error);
    }
  };