import { Link } from "react-router-dom";
import productData from "../components/productData";

const Products = () => {
  const productList = productData.map((item) => (
    <Link key={item.id} to={`/products/${item.id}`}>
      <div
        className="shadow-md rounded-md flex flex-col 
      items-center mr-3 justify-center w-52 md:w-96 bg-white py-3 mb-4 h-52"
      >
        <div className="w-20 mb-3 pb-2 md:w-36">
          <img src={item.srcImg} alt="soap" className=" max-w-full"></img>
        </div>
        <h2 className="text-sm spa font-bold uppercase tracking-wide mb-1">
          {item.name}
        </h2>
      </div>
    </Link>
  ));
  return (
    <div className="flex flex-col items-center">
      <h1
        className="text-center mb-6 text-2xl 
      md:mt-1 md:text-4xl text-slate-500"
      >
        Productos
      </h1>
      <div
        className="flex flex-col sm:flex-row md: mt-1 sm:justify-around 
      items-center sm:flex-wrap lg:max-w-5xl self-center"
      >
        {productList}
      </div>
    </div>
  );
};

export default Products;
