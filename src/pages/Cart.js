import productData from "../components/productData";
import CartItem from "../components/CartItem.js";
import { useContext, useEffect, useState } from "react";
import { ItemContext } from "../hooks/CartContext";

const Cart = () => {
  const { cart, emptyCart } = useContext(ItemContext);
  const [total, setTotal] = useState(null);
  const [buttonText, setButtonText] = useState("Comprar");

  const cartItems = cart.map((item) => <CartItem key={item.id} item={item} />);

  useEffect(() => {
    setTotal(() => {
      let tot = null;
      for (let item of productData) {
        for (let cartItem of cart) {
          if (item.id === cartItem.id) tot += item.price * cartItem.qty;
        }
      }
      return tot;
    });
  }, [cart]);

  const placeOrder = () => {
    setButtonText("Comprando...");
    setTimeout(() => {
      console.log("Compra realizada!");
      emptyCart();
      setButtonText("Comprar");
    }, 3000);
  };

  return (
    <div className="max-w-4xl flex flex-col items-center mx-auto ">
      <p className="self-center font-bold md:text-lg">Carrito de compras</p>
      {cartItems.length > 0 ? (
        <div className="flex flex-col">
          {cartItems}
          <div className="flex self-end mx-4 mt-3">
            <p>Total: $ {total}</p>
          </div>
          <button
            onClick={placeOrder}
            className="bg-red-300 mt-5 shadow-md px-7 py-2 rounded-md hover:bg-red-400 hover:text-slate-100 text-sm self-end"
          >
            {buttonText}
          </button>
        </div>
      ) : (
        <div className="mt-3">Tu carrito está vacío</div>
      )}
    </div>
  );
};
export default Cart;
