import { FcPrevious, FcNext } from "react-icons/fc";
import Image from "../components/Image";
import Modal from "../components/Modal";
import Loading from "../components/Loading";
import useImages from "../hooks/useImages";

const Gallery = ({ selected, setSelected }) => {
  const { image, setPage, setLastVisible, loading, page } = useImages();

  const handleNext = () => {
    setPage((prev) => prev + 1);
    console.log("next page");
  };
  const handlePrev = () => {
    setLastVisible((prev) => prev - 30);
    setPage((prev) => prev - 1);
  };

  const imageGrid = image.map((image) => {
    return <Image url={image.url} key={image.id} setSelected={setSelected} />;
  });

  return (
    <>
      {!loading ? (
        <div>
          <div className="mt-4 grid grid-cols-4 gap-4 items-center">
            {imageGrid}
            <Modal selected={selected} setSelected={setSelected} />
          </div>

          <div className="flex justify-center space-x-3 items-center mt-4">
            <div className="cursor-pointer" onClick={handlePrev}>
              <FcPrevious />
            </div>
            <h2>{page}</h2>
            <div className="cursor-pointer" onClick={handleNext}>
              <FcNext />
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Gallery;
