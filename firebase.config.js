// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoVv6RuTc1BQzwRofVIN9uwEmnXRdkCT8",
  authDomain: "soyunproyecto-14248.firebaseapp.com",
  projectId: "soyunproyecto-14248",
  storageBucket: "soyunproyecto-14248.appspot.com",
  messagingSenderId: "66775867326",
  appId: "1:66775867326:web:4e02a9d2307a4b55f9e3ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firebase Firestore and get a reference to the service
export const db = getFirestore(app);