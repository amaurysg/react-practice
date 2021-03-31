import React, { useEffect, useReducer } from "react";
import AppRouter from "./routers/AppRouter";
import AuthContext from "./auth/AuthContext";
import AuthReducer from "./auth/AuthReducer";

//init is value initial to  my reducer
const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
};

//Component HeroApp
const HeroApp = () => {

  //here useReducer with value to all app
  const [user, dispatch] = useReducer(AuthReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return (
    //user and dispatch, this is my interest in share in all app
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default HeroApp;
