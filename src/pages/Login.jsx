import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [loginCreds, setLoginCreds] = useState({});

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setLoginCreds({
      ...loginCreds,
      [name] : value,
    })
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          data-cy="login-email"
          type="text"
          name="email"
          placeholder="Enter Email"
          onChange={handleOnChange}
        />
        <input
          data-cy="login-password"
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleOnChange}
        />
        <button type="submit" data-cy="login-submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
