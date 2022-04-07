import { useParams } from "react-router-dom";
import productData from "./productData";
import Quantity from "./Quantity";

const Product = () => {
  const { productId } = useParams();
  const thisProduct = productData.find(
    (prod) => prod.id === parseInt(productId)
  );

  const { name, description, srcImg, id, price } = thisProduct;

  return (
    <div
      className="flex justify-center self-center bg-slate-50 
    p-5 rounded-lg shadow-lg hover:shadow-xl"
    >
      <div className="mr-20 w-44">
        <img src={srcImg} alt="soap" className="max-w-full"></img>
      </div>
      <div>
        <h1 className="uppercase mb-2">{name}</h1>
        <h2 className="border-b-2 mb-4 font-bold">$ {price}</h2>
        <Quantity id={id} />
      </div>
    </div>
  );
};

export default Product;
