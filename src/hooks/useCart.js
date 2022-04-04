import { useState } from "react";

const useCart = () => {
  const [counter, setCounter] = useState(0);
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
    console.log(cart);
  };
  console.log(counter);
  return { cart, setCart, addToCart, counter, setCounter };
};

export default useCart;
