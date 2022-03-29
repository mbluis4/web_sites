import { useParams } from "react-router-dom";
import productData from "./productData";

const Product = (props) => {
  const { productId } = useParams();
  const thisProduct = productData.find(
    (prod) => prod.id === parseInt(productId)
  );

  const { name, description, imgSrc } = thisProduct;
  return (
    <div
      className="shadow-md rounded-md flex flex-col 
    items-center w-52 bg-white py-3 mb-4 h-52"
    >
      <h1>{name}</h1>
      <h2>{description}</h2>
    </div>
  );
};

export default Product;
