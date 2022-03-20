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
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDocs(
      query(
        collection(db, "images"),
        orderBy("url"),
        startAfter(lastVisible),
        limit(30)
      )
    ).then((data) => {
      setImage([]);
      data.forEach((doc) => {
        setImage((prev) => [...prev, { id: doc.id, url: doc.data().url }]);
      });
      const lastVisiblePage = data.docs[data.docs.length - 1];
      setLastVisible(lastVisiblePage);
    });
    setLoading(false);
  }, [page]);

  return { image, page, setPage, setLastVisible, loading };
};

export default useImages;
