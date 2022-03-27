const Product = (props) => {
  const { name, srcImg, description } = props.item;
  return (
    <div className="shadow-md rounded-md flex flex-col items-center w-52 bg-white py-3 mb-4 h-52">
      <h1>Product</h1>
    </div>
  );
};

export default Product;
