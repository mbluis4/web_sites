import productData from "./productData";
import QuantityCart from "./QuantityCart";

const CartItem = ({ item, setRecalc }) => {
  const thisItem = productData.find((product) => product.id === item.id);

  return (
    <div className="flex justify-between mx-4 md:space-x-28 items-center py-3 border-b-2 ">
      <img src={thisItem.srcImg} alt="soap" className="w-10 mr-2"></img>
      <p className="w-24">{thisItem.name}</p>
      <div className="mr-2">
        <QuantityCart item={item} setRecalc={setRecalc} />
      </div>
      <p>$ {thisItem.price}</p>
    </div>
  );
};

export default CartItem;
