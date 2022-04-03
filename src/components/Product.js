import { useParams } from "react-router-dom";
import productData from "./productData";
import Quantity from "./Quantity";

const Product = ({ addToCart }) => {
  const { productId } = useParams();
  const thisProduct = productData.find(
    (prod) => prod.id === parseInt(productId)
  );

  const { name, description, srcImg, id } = thisProduct;

  return (
    <div className="flex max-w-1/8 justify-center self-center bg-slate-50 p-5 rounded-lg shadow-lg hover:shadow-xl">
      <div className="max-w-1/2 mr-20">
        <img src={srcImg} alt="soap"></img>
      </div>
      <div>
        <h1 className="uppercase mb-2">{name}</h1>
        <h2 className="border-b-2 mb-4 font-bold">$ 200</h2>
        <Quantity addToCart={addToCart} id={id} addButton={true} />
      </div>
    </div>
  );
};

export default Product;
