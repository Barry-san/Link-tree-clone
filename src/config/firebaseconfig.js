// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyARM1Po3eORd9ukPl5k0QEFofQcxtJ9D6A",
  authDomain: "link-tree-clone-904a5.firebaseapp.com",
  projectId: "link-tree-clone-904a5",
  storageBucket: "link-tree-clone-904a5.appspot.com",
  messagingSenderId: "833336469311",
  appId: "1:833336469311:web:39408b450c8dbce6af558a",
  measurementId: "G-L0WTB43WCL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
