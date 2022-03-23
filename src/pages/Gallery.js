import { FcPrevious, FcNext } from "react-icons/fc";
import Image from "../components/Image";
import Modal from "../components/Modal";
import Loading from "../components/Loading";
import useImages from "../hooks/useImages";
import React from "react";

const Gallery = ({ selected, setSelected }) => {
  const { image, setPage, setLastVisible, loading, page, setBack } =
    useImages();

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };
  const handlePrev = () => {
    setBack((prev) => !prev);
  };

  const imageGrid = image.map((image) => {
    return <Image url={image.url} key={image.id} setSelected={setSelected} />;
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="grid grid-cols-4 gap-4 items-center mt-2 mx-2">
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
      )}
    </>
  );
};

export default Gallery;
