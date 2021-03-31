import React, { useReducer } from "react";
import AppRouter from "./routers/AppRouter";
import AuthContext from "./auth/AuthContext";
import AuthReducer from "./auth/AuthReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

const HeroApp = () => {
  const [user, dispatch] = useReducer(AuthReducer, {}, init);

  return (
    //user and dispatch, this is my interest in share in all app
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default HeroApp;
