import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
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
    default:
      return state;
  }
};

export default userReducer;
