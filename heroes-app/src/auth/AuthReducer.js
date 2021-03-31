import types from "../types/types";

// const state = {
//   name: "Amaury",
//   logged: true,
// };



const AuthReducer = (state = {}, action) => {

  //types is a simple object file. (for convenience)
  switch (action.type) {

    //case one
    case types.login:
      return {
        ...action.payload,
        logged: true,
      };
    //case two 
    case types.logout:
      return {
        logged: false,
      };
    //default for convienve return state.
    default:
      return state;
  }
};

export default AuthReducer;
