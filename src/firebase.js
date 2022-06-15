import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "react-admin-auth.firebaseapp.com",
  projectId: "react-admin-auth",
  storageBucket: "react-admin-auth.appspot.com",
  messagingSenderId: "97424491791",
  appId: "1:97424491791:web:3a614f9920643706c9ea7a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();
