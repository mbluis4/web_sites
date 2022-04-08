import productData from "./productData";
import QuantityCart from "./QuantityCart";
import { FaTrash } from "react-icons/fa";
import useCart from "../hooks/useCart";
import { useContext } from "react";
import { ItemContext } from "../hooks/CartContext";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(ItemContext);
  const thisItem = productData.find((product) => product.id === item.id);

  return (
    <div className="flex justify-between mx-4 md:space-x-28 items-center py-3 border-b-2 ">
      <FaTrash
        className="mr-4 hover:cursor-pointer"
        onClick={() => removeItem(item.id)}
      />
      <img src={thisItem.srcImg} alt="soap" className="w-10 mx-2"></img>
      <p className="w-24">{thisItem.name}</p>
      <div className="mr-2">
        <QuantityCart item={item} />
      </div>
      <p>$ {thisItem.price} c/u</p>
    </div>
  );
};

export default CartItem;
