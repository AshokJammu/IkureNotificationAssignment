import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE
  } from "./actionType";

  const initState = {
    isRegister: false,
    registerData: "",
    message: ""
  };
  
  const registerReducer = (state = initState, action) => {
    console.log(action.payload, "rrr");
    switch (action.type) {
      case REGISTER_USER_REQUEST:
        return {
          ...state,
          isRegister: false
        };
      case REGISTER_USER_SUCCESS:
        return {
          ...state,
          registerData: action.payload,
          isRegister: true,
          message: action.payload.message
        };
      case REGISTER_USER_FAILURE:
        return {
          ...state,
          isRegister: false,
          message: action.payload.message
        };
      default:
        return state;
    }
  };
  
  export default registerReducer;