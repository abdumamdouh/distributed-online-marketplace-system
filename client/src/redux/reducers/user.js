import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  PURCHASE_PRODUCT,
  PURCHASE_PRODUCT_SUCCESS,
  PURCHASE_PRODUCT_FAIL
} from "../types";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        loading: true
      };
    case REGISTER_SUCCESS:
      return {
        userInfo: action.payload
      };
    case REGISTER_FAIL:
      return {
        error: action.payload,
        loading: false
      };
    //LOGIN
    case LOGIN_REQUEST:
      return {
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        userInfo: action.payload
      };
    case LOGIN_FAIL:
      return {
        error: action.payload
      };
    case LOGOUT:
      return {};

      
    //user purchase product
    case PURCHASE_PRODUCT:
      return;
    case PURCHASE_PRODUCT_SUCCESS:
      return { 
        ...state,
        userInfo : {
          ...state.userInfo,
          user: {
            ...state.userInfo.user,
            purchasedItems: [...state.userInfo.user.purchasedItems, action.payload.buyer.purchasedItems[action.payload.buyer.purchasedItems.length - 1]]
          }
        }
      };
    case PURCHASE_PRODUCT_FAIL:
      return ;
    default:
      return state;
  }
};

export default userReducer;
