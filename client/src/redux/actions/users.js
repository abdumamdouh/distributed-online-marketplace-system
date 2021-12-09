import axios from "axios";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  PURCHASE_PRODUCT_SUCCESS
} from "../types";
const serverURL = "http://localhost:5000"

const registerUserAction = (name, email, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: REGISTER_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const { data } = await axios.post(
        `${serverURL}/users/`,
        {
          name,
          email,
          password
        },
        config
      );
      dispatch({ type: REGISTER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response && error.response.data.message
      });
    }
  };
};

const loginUserAction = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const { data } = await axios.post(
        `${serverURL}/users/login`,
        {
          email,
          password
        },
        config
      );
      dispatch({ type: LOGIN_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response && error.response.data.message
      });
    }
  };
};

//Log out
const logoutUserAction = () => {
  return {
    type: LOGOUT
  };
};

//TODO: test
//Purchase products to the inventory 
export const purchaseProductAction = (id, token) =>{
  return async (dispatch) => {
    try {
        
        const rawResponse = await fetch(`${serverURL}/products/purchaseItem/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          }
        });
  
        const data = await rawResponse.json();

        dispatch({ type: PURCHASE_PRODUCT_SUCCESS, payload: data })

    } catch (error) {

    }
  }
}

export { registerUserAction, loginUserAction, logoutUserAction };
