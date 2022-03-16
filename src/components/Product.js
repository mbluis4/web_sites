const Product = (props) => {
  const { name, srcImg, description } = props.item;
  return (
    <div className="flex flex-col items-center w-40 bg-white py-3">
      <div className="w-28">
        <img src={srcImg} alt="soap" className="max-w-1/ pb-2"></img>
      </div>
      <h2 className="text-lg font-bold uppercase">{name}</h2>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default Product;
