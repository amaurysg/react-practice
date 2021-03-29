import React from "react";
import { useHistory } from "react-router";
import "./Login.css";

const Login = () => {
  //call hooks useHistory
  let history = useHistory();

  const handleClick = () => {
    // history.push("/");
    //When do click, so...
    //replace is better than push, but in this case.
    history.replace("/");
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
