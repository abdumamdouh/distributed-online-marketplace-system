import axios from 'axios';

import {
  FETCH_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_SINGLE_PRODUCT,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
} from '../types';

const URL = 'https://600c30e638fd25001702cf7e.mockapi.io/api/v1/products';

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(URL);
      dispatch({ type: FETCH_PRODUCTS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCart = (itemID) => {
  return {
    type: ADD_TO_CART,
    payload: itemID,
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const fetchSingleProduct = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/${id}`);
      dispatch({ type: FETCH_SINGLE_PRODUCT, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

//Add products to the inventory 
export const addProductAction = (productInfo) =>{
  return async (dispatch) => {
    try {
        dispatch({ type: ADD_PRODUCT})
        const config ={
          'Content-Type' : 'application/json'
        }
        const {data} = await axios.post('/api/products/addItem', productInfo, config);
        dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: ADD_PRODUCT_FAIL, payload: error.response&&error.response.data.message })
    }
  }
}