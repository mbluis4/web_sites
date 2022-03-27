import { useState } from "react";
import Product from "../components/Product";
import mini_1 from "../images/mini_1.png";
import rostro from "../images/rostro.png";
import baby_shower from "../images/baby_shower.png";
import navidad from "../images/navidad.png";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Mini-jabones",
      srcImg: mini_1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: 2,
      name: "Rostro",
      srcImg: rostro,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: 3,
      name: "Baby showers",
      srcImg: baby_shower,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: 4,
      name: "Navideños",
      srcImg: navidad,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ]);

  const productList = products.map((item) => (
    <div
      key={item.id}
      className="shadow-md rounded-md flex flex-col items-center justify-center w-52 bg-white py-3 mb-4 h-52"
    >
      <Link to={`/products/${item.id}`}>
        <div className="w-20 mb-3 pb-2 ">
          <img src={item.srcImg} alt="soap" className=" max-w-full"></img>
        </div>
        <h2 className="text-sm spa font-bold uppercase tracking-wide mb-1">
          {item.name}
        </h2>
      </Link>
    </div>
  ));
  return (
    <>
      <h1 className="text-center mb-4 text-lg md:text-4xl text-slate-500">
        Productos
      </h1>
      <div className="flex flex-col sm:flex-row sm:justify-around items-center sm:flex-wrap self-center md:space-x-6">
        {productList}
      </div>
    </>
  );
};

export default Products;
