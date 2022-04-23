import axios from "axios";
export const GET_POST = "GET_POST";

export const get_post = (payload) => {
  return { type: GET_POST, payload: payload };
};

// export const get_login_user = (form) => async (dispatch) => {
//   try {
//     const { data } = await axios.post(
//       `https://negast.herokuapp.com/buyers/login`,
//       form
//     );
//     dispatch(get_login_buyer(data));
//     console.log("hello hello", data.item);
//     alert("Login Successfull");
//     var buyer = data.item;
//     localStorage.setItem("buyerData", JSON.stringify(buyer));
//   } catch (error) {
//     console.log("Buyers Error From Redux", error);
//     alert("Login Credential Wrong");
//   }
// };

export const get_post_buyer = (form) => async (dispatch) => {
  //:userid --> latest post server [...]
  //ye wala local hai []
  try {
    const { data } = await axios.post(
      `https://negast.herokuapp.com/posts`,
      form
    );

    console.log("hello hello", data);
    // dispatch(get_post(data));
  } catch (error) {
    console.log("Buyers Error From Redux", error);
    alert("Post again");
  }
};

export const post_buyer_specific = (value) => async (dispatch) => {
  //:userid --> latest post server [...]
  //ye wala local hai []
  try {
    const { data } = await axios.get(
      `https://negast.herokuapp.com/posts/buyer/${value}`
    );

    console.log("user all post", data);
    //   dispatch(get_post(data));
  } catch (error) {
    console.log("Buyers Error From Redux", error);
    alert("Post again");
  }
};

export const get_all_post = () => async (dispatch) => {
  //:userid --> latest post server [...]
  //ye wala local hai []
  try {
    const { data } = await axios.get(`https://negast.herokuapp.com/posts/`);

    console.log("All post", data);
    dispatch(get_post(data));
  } catch (error) {
    console.log("Buyers Error From Redux", error);
    alert("Post again");
  }
};
