import productData from "../components/productData";
import CartItem from "../components/CartItem.js";

const Cart = ({ cart }) => {
  const cartItems = cart.map((item) => <CartItem key={item.id} item={item} />);
  return <div>{cartItems}</div>;
};
export default Cart;
