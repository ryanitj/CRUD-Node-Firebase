// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, updateDoc, deleteDoc, getDoc, doc, addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYn-5K4Cw-OAZD-eM1PCc5c08sYCns2V0",
  authDomain: "trabalho-bd-m3.firebaseapp.com",
  projectId: "trabalho-bd-m3",
  storageBucket: "trabalho-bd-m3.appspot.com",
  messagingSenderId: "304885433895",
  appId: "1:304885433895:web:8a05cb6323a625af8af002"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


