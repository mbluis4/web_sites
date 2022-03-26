const Product = (props) => {
  const { name, srcImg, description } = props.item;
  return (
    <div className="shadow-md rounded-md flex flex-col items-center w-52 bg-white py-3 mb-4 h-52">
      <div className="w-20 mb-3 pb-2 ">
        <img src={srcImg} alt="soap" className=" max-w-full"></img>
      </div>
      <h2 className="text-sm spa font-bold uppercase tracking-wide mb-1">
        {name}
      </h2>
      <p className="text-center text-sm px-1">{description}</p>
    </div>
  );
};

export default Product;
