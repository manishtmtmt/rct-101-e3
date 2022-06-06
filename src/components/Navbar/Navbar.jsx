import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink

const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [cart, setCart] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/cartItems")
      .then((r) => r.json())
      .then((res) => {
        setCart(res);
      });
  }, []);

  const handleOnClick = () => {
    if (isAuth) {
      logout();
    } else {
      navigate("/login");
    }
  };

  return (
    <div data-cy="navbar">
      <Link to="/" data-cy="navbar-home-link">
        Logo
      </Link>
      <span data-cy="navbar-cart-items-count">
        Cart: 
        {isAuth ? cart.length : "0"}
      </span>
      <button onClick={handleOnClick} data-cy="navbar-login-logout-button">
        {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
