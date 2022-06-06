import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    let isPresent = cart.some((d) => d.productId === id);
    const newCart = {
      productId: id,
      count: 1,
    };
    if (!isPresent) {
      fetch("http://localhost:8080/cartItems", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ ...newCart }),
      })
        .then((r) => r.json())
        .then((res) => {
          setCart([...cart, res]);
        });
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
