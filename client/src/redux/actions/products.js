import axios from 'axios';

import {
  FETCH_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_SINGLE_PRODUCT,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  PURCHASE_PRODUCT,
  PURCHASE_PRODUCT_SUCCESS,
  PURCHASE_PRODUCT_FAIL,
} from '../types';

const URL = 'https://600c30e638fd25001702cf7e.mockapi.io/api/v1/products';
const serverURL = 'http://localhost:5000'

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${serverURL}/products/`);
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
      const response = await axios.get(`${serverURL}/products/${id}`);
      dispatch({ type: FETCH_SINGLE_PRODUCT, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

//Add products to the inventory 
export const addProductAction = (product,token) =>{
  return async (dispatch) => {
    try {

        const rawResponse = await fetch(`${serverURL}/products/addItem`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(product)
      });

    const data = await rawResponse.json();

        dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data })

    } catch (error) {


    }
  }
}
//TODO: test
//Purchase products to the inventory 
export const purchaseProductAction = (id, token) =>{
  return async (dispatch) => {
    try {
        

        const config ={
          'Content-Type' : 'application/json',
          //'Authorization': 'Bearer ' + token
        }
        const { data } = await axios.post(`${serverURL}/products/purchaseItem/${id}`, config);

        dispatch({ type: PURCHASE_PRODUCT_SUCCESS, payload: data })

    } catch (error) {

    }
  }
}
//TODO: check
//delete product 
export const deleteProductAction =(productId,token)=>{
  return async(dispatch) =>{
    try{

        const rawResponse = await fetch(`${serverURL}/products/deleteItem/${productId}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          }
        });
  
        const data = await rawResponse.json();

        //const {data} = await axios.delete(`${serverURL}/products/deleteItem/${productId}`)
        dispatch ({type: DELETE_PRODUCT_SUCCESS, payload: data})
    }
    catch(error){
     
    }
  }

}