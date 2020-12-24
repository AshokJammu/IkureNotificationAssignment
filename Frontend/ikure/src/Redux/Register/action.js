import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE
  } from "./actionType";
  import axios from "axios";
  // import { registerUserFailure } from "../Registration/action";
  
  export const registerUserRequest = payload => ({
    type: REGISTER_USER_REQUEST,
    payload: payload
  });
  
  export const registerUserSuccess = payload => ({
    type: REGISTER_USER_SUCCESS,
    payload
  });
  
  export const registerUserFailure = payload => ({
    type: REGISTER_USER_FAILURE,
    payload
  });
  
  export const registerUserData = (payload) => dispatch => {
   // console.log(payload, "amm");
    dispatch(registerUserRequest(payload));
  
    return axios
      .post("http://localhost:5000/ikureRegistration/register", { ...payload })
      .then(res => {
          console.log(res.data,"ax")
        return res.data;
      })
      .then(res => dispatch(registerUserSuccess(res)))
      .catch(err => {
        dispatch(registerUserFailure(err));
      });
  };