import { useEffect, useState } from "react";
import useCart from "../hooks/useCart";
import productData from "./productData";

const QuantityCart = ({ item, setRecalc, setTotal }) => {
  const [quantityCart, setQuantityCart] = useState(item.qty);
  const { cart, addToCart } = useCart();

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (value < 1) value = "";
    String(value);
    setQuantityCart(value);
    //addToCart(item.id, quantity);
  };
  useEffect(() => {
    addToCart(item.id, Number(quantityCart));
    setRecalc((prev) => prev + 1);

    console.log(cart);
  }, [quantityCart, item.id]);

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex mt-2">
          <button
            className="w-5 bg-slate-200"
            onClick={() =>
              setQuantityCart((prev) =>
                Number(prev) === 1 ? 1 : Number(prev) - 1
              )
            }
          >
            -
          </button>
          <input
            type="number"
            onChange={handleChange}
            name="quantity"
            value={quantityCart}
            className="w-6 border-2 border-slate-200 text-center"
          ></input>
          <button
            className="w-5 bg-slate-200"
            onClick={() => setQuantityCart((prev) => Number(prev) + 1)}
          >
            +
          </button>
        </div>
        {/* {addButton && (
          <button
            onClick={() => addToCart(id, quantity.count)}
            className="bg-red-300 mt-5 shadow-md px-7 py-2 rounded-md hover:bg-red-400 hover:text-slate-100 text-sm"
          >
            Agregar al carrito
          </button>
        )} */}
      </div>
    </div>
  );
};

export default QuantityCart;
