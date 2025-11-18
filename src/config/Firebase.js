// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3PwwHBZKG0k9-DaPgSlyBO4kkSuQGcwI",
  authDomain: "react-contact-form-97a24.firebaseapp.com",
  projectId: "react-contact-form-97a24",
  storageBucket: "react-contact-form-97a24.firebasestorage.app",
  messagingSenderId: "1073475409472",
  appId: "1:1073475409472:web:25056c4350d17462a7b1a5",
  measurementId: "G-1MHRPYCSMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
