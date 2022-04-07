import { useState, useRef, useEffect, useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { ItemContext } from "../hooks/CartContext";

const Quantity = ({ id }) => {
  const [quantity, setQuantity] = useState(1);
  const addButton = useRef(null);
  const { addToCart } = useContext(ItemContext);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (value < 1) value = "";
    String(value);
    setQuantity(value);
  };
  useEffect(() => {
    addButton.current.classList.remove("clicked");
  }, [quantity]);
  const handleClick = () => {
    addButton.current.classList.add("clicked");
    addToCart(id, Number(quantity));
  };

  return (
    <div>
      <p>Cantidad</p>
      <div className="flex flex-col">
        <div className="flex mt-2">
          <button
            className="w-5 bg-slate-200"
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          <input
            type="number"
            onChange={handleChange}
            name="quantity"
            value={quantity}
            className="w-6 border-2 border-slate-200 text-center"
          ></input>
          <button
            className="w-5 bg-slate-200"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>

        <button
          onClick={handleClick}
          ref={addButton}
          className="bg-red-300 mt-5 shadow-md px-7 py-2 
          rounded-md hover:bg-red-400 hover:text-slate-100 text-sm addToCart"
        >
          <span className="add">Agregar</span>
          <span className="added">Agregado</span>
          <FaShoppingCart className="inline shoppingCart" />
          <GiCardboardBoxClosed className="inline boxCart" />
        </button>
      </div>
    </div>
  );
};

export default Quantity;
