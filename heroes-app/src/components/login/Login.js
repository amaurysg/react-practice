import React from "react";
import { useHistory } from "react-router";

const Login = () => {
  let history = useHistory();
  const handleClick = () => {
    // history.push("/");
    history.replace("/");
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};

export default Login;
