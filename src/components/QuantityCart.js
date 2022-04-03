import { useState } from "react";

const QuantityCart = ({ item }) => {
  const [quantity, setQuantity] = useState(item.qty);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuantity({
      [name]: value,
    });
  };

  //console.log(item);

  return (
    <div>
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
