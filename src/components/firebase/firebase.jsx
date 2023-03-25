
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuiuRQeI2XktdhcyowdhHL3i61KVgMjBo",
  authDomain: "moviehour-72fd5.firebaseapp.com",
  projectId: "moviehour-72fd5",
  storageBucket: "moviehour-72fd5.appspot.com",
  messagingSenderId: "738776193562",
  appId: "1:738776193562:web:70dde6e1c5c1c0924f0fa3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef =  collection(db,"movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;