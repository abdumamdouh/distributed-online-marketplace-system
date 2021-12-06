import axios from "axios";
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../types";

const registerUserAction = (name, email, password) => {
    return async dispatch => {
        try {
            dispatch({ type: REGISTER_REQUEST });
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            };
            const { data } = await axios.post(
                "api/users/",
                {
                    name,
                    email,
                    password
                },
                config
            );
            dispatch({ type: REGISTER_SUCCESS, payload: data });
        } catch (error) {
            dispatch({type:REGISTER_FAIL, 
                payload: error.response && error.response.data.message})
        }
    };
};

const loginUserAction = (email, password) => {
    return async dispatch => {
        try {
            dispatch({ type: LOGIN_REQUEST });
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            };
            const { data } = await axios.post(
                "api/users/login",
                {
                    email,
                    password
                },
                config
            );
            dispatch({ type: LOGIN_SUCCESS, payload: data });
        } catch (error) {
            dispatch({type:LOGIN_FAIL, 
                payload: error.response && error.response.data.message})
        }
    };
};

//Log out
const logoutUserAction = ()=>{
    return{
        type: LOGOUT,
    }
}
    

export {registerUserAction, loginUserAction, logoutUserAction}