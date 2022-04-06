import productData from "../components/productData";
import CartItem from "../components/CartItem.js";
import { useEffect, useState } from "react";
import useCart from "../hooks/useCart";

const Cart = () => {
  const { cart } = useCart();
  const [recalc, setRecalc] = useState(0);
  const [total, setTotal] = useState(null);

  const cartItems = cart.map((item) => (
    <CartItem
      key={item.id}
      item={item}
      setRecalc={setRecalc}
      setTotal={setTotal}
    />
  ));

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
    console.log(recalc);
    console.log(cart);
  }, [recalc, cart]);

  return (
    <div className="max-w-4xl flex flex-col items-center mx-auto ">
      <p className="self-center font-bold md:text-lg">Carrito de compras</p>
      {cartItems}
      <div className="flex self-end mx-4">
        <p>
          Total: ${total} {recalc}
        </p>
      </div>
      <button className="bg-red-300 mt-5 shadow-md px-7 py-2 rounded-md hover:bg-red-400 hover:text-slate-100 text-sm self-end">
        Comprar
      </button>
    </div>
  );
};
export default Cart;
