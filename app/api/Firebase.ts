// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from 'firebase/storage'
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8iV529gIV3gRePasNcnAvLbRu_8qhskU",
  authDomain: "portfolio-revisit.firebaseapp.com",
  projectId: "portfolio-revisit",
  storageBucket: "portfolio-revisit.appspot.com",
  messagingSenderId: "498040014052",
  appId: "1:498040014052:web:6d97ef580287f2dcb718f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);