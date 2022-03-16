import { useState } from "react";
import Product from "../components/Product";
import mini_1 from "../images/mini_1.png";
import mini_2 from "../images/mini_2.png";
import baby_shower from "../images/baby_shower.png";

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
      srcImg: mini_2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: 3,
      name: "Baby showers",
      srcImg: baby_shower,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    /* {
      id: 4,
      name: "Navideños",
      pic: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    }, */
  ]);

  const productList = products.map((item) => (
    <Product key={item.id} item={item} />
  ));
  return <div className="flex justify-between mt-4">{productList}</div>;
};

export default Products;
