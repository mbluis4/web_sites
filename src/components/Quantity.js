import useQuantityColor from "../hooks/useQuantityColor";

const Quantity = () => {
  const { quantity, setQuantity } = useQuantityColor();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuantity({
      [name]: value,
    });
  };

  return (
    <div>
      <p>Cantidad</p>
      <div className="flex">
        <button
          className="w-5 bg-slate-200"
          onClick={() =>
            setQuantity((prev) => ({
              count: prev.count === 1 ? 1 : prev.count - 1,
            }))
          }
        >
          -
        </button>
        <input
          type="number"
          onChange={handleChange}
          name="count"
          value={quantity.count}
          className="w-6 border-2 border-slate-200 text-center"
        ></input>
        <button
          className="w-5 bg-slate-200"
          onClick={() => setQuantity((prev) => ({ count: prev.count + 1 }))}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Quantity;
