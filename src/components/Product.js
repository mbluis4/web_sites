import { useParams } from "react-router-dom";
import productData from "./productData";
import Quantity from "./Quantity";

const Product = (props) => {
  const { productId } = useParams();
  const thisProduct = productData.find(
    (prod) => prod.id === parseInt(productId)
  );

  const { name, description, srcImg } = thisProduct;

  return (
    <div className="flex max-w-1/8 justify-center self-center bg-slate-50 p-5 rounded-lg shadow-lg">
      <div className="max-w-1/2 mr-20">
        <img src={srcImg} alt="soap"></img>
      </div>
      <div>
        <h1 className="uppercase mb-2">{name}</h1>
        <h2 className="border-b-2 mb-4 font-bold">$ 200</h2>
        <Quantity />
        <button className="bg-red-300 mt-5 px-7 py-2 rounded-md hover:bg-red-400 hover:text-slate-100 text-sm">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Product;
