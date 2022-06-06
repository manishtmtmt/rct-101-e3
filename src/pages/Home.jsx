import axios from "axios";
import React, { useContext, useState } from "react";
import Products from "../components/Products/Products";
import { AuthContext } from "../context/AuthContext";
import Login from "./Login";

const Home = () => {
  const {isAuth} = useContext(AuthContext)

  return <div>{
    isAuth ? <Products /> : <Login />
    }</div>;
};

export default Home;
