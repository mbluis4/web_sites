import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  query,
  limit,
  orderBy,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase/config";

const useImages = () => {
  const [image, setImage] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [firstVisible, setFirstVisible] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(null);
  const [back, setBack] = useState(false);

  const getImages = (lastdoc = null) => {
    getDocs(
      query(
        collection(db, "images"),
        orderBy("url"),
        startAfter(lastdoc),
        limit(5)
      )
    ).then((data) => {
      setImage([]);
      if (data) {
        data.forEach((doc) => {
          setImage((prev) => [...prev, { id: doc.id, url: doc.data().url }]);
          const lastVisiblePage = data.docs[data.docs.length - 1];
          setLastVisible(lastVisiblePage);
          setFirstVisible(data.docs[0]);
        });
      }
    });
    setLoading(true);
  };
  useEffect(() => {
    getImages();
  }, []);

  useEffect(() => {
    getImages(lastVisible);
  }, [page]);

  /*   useEffect(() => {
    getDocs(
      query(
        collection(db, "images"),
        orderBy("url", "desc"),
        startAfter(firstVisible),
        limit(5)
      )
    ).then((data) => {
      setImage([]);
      if (data) {
        const revData = data.docs.reverse();
        revData.forEach((doc) => {
          setImage((prev) => [...prev, { id: doc.id, url: doc.data().url }]);
          const lastVisiblePage = data.docs[data.docs.length - 1];
          setLastVisible(lastVisiblePage);
          setFirstVisible(data.docs[0]);
        });
      }
    });
    setLoading(true);
  }, [back]); */

  return { image, page, setPage, setLastVisible, loading, setBack };
};

export default useImages;
