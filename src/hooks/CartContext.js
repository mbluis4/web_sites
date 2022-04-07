import { useState, createContext } from "react";
import productData from "../components/productData";

const ItemContext = createContext();

const ItemProvider = (props) => {
  const [cart, setCart] = useState(() => {
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  });

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    console.log(newCart);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

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
  console.log(cart);
  return (
    <ItemContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeItem,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export { ItemProvider, ItemContext };
