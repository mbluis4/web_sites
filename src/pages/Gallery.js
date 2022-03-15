import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import image from "../image";
import Image from "../components/Image";
import Modal from "../components/Modal";

const Gallery = ({ selected, setSelected }) => {
  /* const [image, setImage] = useState([]);
  useEffect(async () => {
    const queryImages = await getDocs(collection(db, "images"));
    queryImages.forEach((doc) => {
      setImage((prev) => [...prev, { id: doc.id, url: doc.data().url }]);
    });
  }, []); */
  const imageGrid = image.map((image) => {
    return <Image url={image.url} key={image.id} setSelected={setSelected} />;
  });

  return (
    <div
      className={`mt-4 grid grid-cols-4 gap-4 items-center relative ${
        selected && "opacity-100"
      }`}
    >
      {imageGrid}
      <Modal selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default Gallery;
