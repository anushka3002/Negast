
import axios from 'axios'
export const GET_PRODUCTS = 'GET_PRODUCTS';

export const get_products = (payload)=>{
    return {type: GET_PRODUCTS,payload: payload}
}

export const get_products_data = () => async (dispatch) => {
    try {
      const { data } = await axios.get(`https://negast.herokuapp.com/products`);
      dispatch(get_products(data));
    } catch (error) {
      console.log("Product Error from Redux", error);
    }
};

  export const SortingASC_Products = () => async (dispatch) => {
    try {
      const { data } = await axios.get(`https://negast.herokuapp.com/products/sort/low-high`);
      dispatch(get_products(data));
    } catch (error) {
      console.log("Product Error from Redux", error);
    }
  };

  export const SortingDESC_Products = () => async (dispatch) => {
    try {
      const { data } = await axios.get(`https://negast.herokuapp.com/products/sort/high-low`);
      dispatch(get_products(data));
    } catch (error) {
      console.log("Product Error from Redux", error);
    }
  };

  export const CategoriesBlock = (value) => async (dispatch) => {
    try {
      const { data } = await axios.get(`https://negast.herokuapp.com/products/category?category=${value}`);
      dispatch(get_products(data));
    } catch (error) {
      console.log("Product Error from Redux", error);
    }
  };

  export const BrandBlock = (value) => async (dispatch) => {
    try {
      const { data } = await axios.get(`https://negast.herokuapp.com/products/brand/?filter=${value}`);
      dispatch(get_products(data));
    } catch (error) {
      console.log("Product Error from Redux", error);
    }
  };

//   export const FilterType = (value) => async (dispatch) => {
//     try {
//       const { data } = await axios.get(`https://afternoon-eyrie-36220.herokuapp.com/flat/type/?filter=${value}`);
//       dispatch(get_flats(data));
//     } catch (error) {
//       console.log("Flat Error from Redux", error);
//     }
//   };