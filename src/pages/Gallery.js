import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const Gallery = () => {
  useEffect(() => {
    const getCol = async () => {
      const querySnapshot = await getDocs(collection(db, "images"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    };
  }, []);

  return <>Gallery</>;
};

export default Gallery;
