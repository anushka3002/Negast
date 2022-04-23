import axios from 'axios';
export const GET_LOGIN_BUYER = "GET_LOGIN_BUYER";

export const get_login_buyer = (payload)=>{
return {type: GET_LOGIN_BUYER,payload: payload}
}

export const get_login_user = (form) => async (dispatch) => {
    try {
      const { data } = await axios.post(`https://negast.herokuapp.com/buyers/login`,form);
      dispatch(get_login_buyer(data));
      console.log("hello hello", data.item)
      alert("Login Successfull")
      var buyer = data.item;
      localStorage.setItem("buyerData", JSON.stringify(buyer));
    } catch (error) {
      console.log("Buyers Error From Redux", error);
      alert("Login Credential Wrong")
    }
  };

  export const get_register_user = (form) => async (dispatch) => {
    try {
      const { data } = await axios.post(`https://negast.herokuapp.com/buyers/register`,form);
      dispatch(get_login_buyer(data));
      alert("Registered Successfull")
    } catch (error) {
      console.log("Seller Register Error From Redux", error);
      alert("Registered Again")
    }
  };