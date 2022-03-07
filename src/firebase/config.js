// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU-0H6lZN1QKJORQAPZ343ZyhD1psv3x4",
  authDomain: "glycerin-45821.firebaseapp.com",
  projectId: "glycerin-45821",
  storageBucket: "glycerin-45821.appspot.com",
  messagingSenderId: "251575704751",
  appId: "1:251575704751:web:270181afab694ac5ea085a",
  measurementId: "G-LTY51P8VHT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
