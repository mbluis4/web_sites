import { useState, useEffect } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { storage, db } from "../firebase/config";

const useStorage = (files) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState([]);

  useEffect(() => {
    //storage ref
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      //storage reference
      const storageRef = ref(storage, `images/${file.name}`);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snap) => {
          const progress = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => setError(error),
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          const collectionRef = addDoc(collection(db, "images"), {
            url,
          });
          setUrl((prev) => [...prev, url]);
        }
      );
    }
    /*  const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snap) => {
        const progress = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => setError(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => setUrl(url));
      }
    ); */
  }, [files]);

  return { progress, url, error };
};

export default useStorage;
