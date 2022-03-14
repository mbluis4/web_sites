const Image = ({ url, setSelected }) => {
  return (
    <div className="overflow-hidden" onClick={() => setSelected(url)}>
      <img src={url} alt="soap" className="rounded-md shadow-md"></img>
    </div>
  );
};

export default Image;
