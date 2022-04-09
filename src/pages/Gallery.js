import Modal from "../components/Modal";
import Loading from "../components/Loading";
import useImages from "../hooks/useImages";
import React, { useCallback, useRef, useState } from "react";

const Gallery = ({ selected, setSelected }) => {
  const [page, setPage] = useState(1);
  const { images, loading, hasMore } = useImages(page);

  const observer = useRef(null);
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const imageGrid = images.map((image, index) => {
    if (images.length === index + 1) {
      return (
        <div
          key={image.id}
          ref={lastBookElementRef}
          className="overflow-hidden"
          onClick={() => setSelected(image.url)}
        >
          <img
            src={image.url}
            alt="soap"
            className="rounded-md shadow-md"
          ></img>
        </div>
      );
    } else {
      return (
        <div className="overflow-hidden" onClick={() => setSelected(image.url)}>
          <img
            key={image.id}
            src={image.url}
            alt="soap"
            className="rounded-md shadow-md"
          ></img>
        </div>
      );
    }
  });

  return (
    <>
      <div>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mt-2 mb-5 max-w-7xl mx-auto">
          {imageGrid}
          <Modal selected={selected} setSelected={setSelected} />
        </div>
      </div>

      {loading && <Loading />}
    </>
  );
};

export default Gallery;
