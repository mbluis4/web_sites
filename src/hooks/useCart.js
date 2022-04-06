import productData from "../components/productData";
import { useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState(() => {
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  });

  const addToCart = (id, qty) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      if (newCart.find((product) => product.id === id)) {
        const productIndex = newCart.findIndex((product) => product.id === id);
        newCart[productIndex].qty = qty;
      } else {
        newCart.push({ id, qty });
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };
  //console.log(cart);
  return { cart, setCart, addToCart };
};

export default useCart;
