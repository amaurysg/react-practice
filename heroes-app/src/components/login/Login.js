import React, { useContext } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../auth/AuthContext";
import types from "../../types/types";
import "./Login.css";

const Login = () => {

  const lastPathname = localStorage.getItem('lastPathname') || '/'
  console.log("last  rute:", lastPathname)


  //Now I called dispatch from AuthContext
  const { dispatch } = useContext(AuthContext)

  //call hooks useHistory
  let history = useHistory();

  const handleClick = () => {
    // history.push("/");
    //When do click, so...
    //replace is better than push, but in this case.
    //Add dispatch
    dispatch({
      //remember types.login '[auth] login'
      type: types.login,
      payload: {
        name: 'Amaury'
      }
    })
    //lastPathname because is rute saved in localStorage
    history.replace(lastPathname);

  };

  return (
    <div className="login-container">
      <div className="container">
        <h1>Logi</h1>
        <hr />
        <button className="btn btn-primary" onClick={handleClick}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
