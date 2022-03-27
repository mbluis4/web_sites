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

const useImages = (page) => {
  const [images, setImages] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState(null);

  const getImages = (lastdoc) => {
    setLoading(true);
    getDocs(
      query(
        collection(db, "images"),
        orderBy("url"),
        startAfter(lastdoc || 0),
        limit(10)
      )
    )
      .then((data) => {
        if (data) {
          setLoading(false);
          data.forEach((doc) => {
            return setImages((prev) => [
              ...prev,
              { id: doc.id, url: doc.data().url },
            ]);
          });
          const lastVisibleImage = data.docs[data.docs.length - 1];
          setLastVisible(lastVisibleImage);
          setHasMore(data.docs.length > 0);
        }
      })
      .catch((error) => setError(error));
  };
  useEffect(() => {
    getImages(lastVisible);
  }, [page]);

  return { images, loading, hasMore };
};

export default useImages;
