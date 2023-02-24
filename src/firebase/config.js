// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: REACT_APP_FB_KEY,
  authDomain: "glycerin-45821.firebaseapp.com",
  projectId: "glycerin-45821",
  storageBucket: "glycerin-45821.appspot.com",
  messagingSenderId: "251575704751",
  appId: "1:251575704751:web:270181afab694ac5ea085a",
  measurementId: "G-LTY51P8VHT",
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);

export { firebaseApp, storage, db };

// gs://glycerin-45821.appspot.com/

// gs://glycerin-45821.appspot.com/images/20150812_202028.jpg
