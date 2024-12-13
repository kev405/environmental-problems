// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { 
  getFirestore,
  doc,
  getDoc,
  setDoc 
} from "firebase/firestore";
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

// Función para enviar puntaje de un usuario
export const enviarPuntaje = async (userId, score) => {
  try {
    await setDoc(doc(db, "puntajes", userId), {
      score: score,
    });
    console.log("Puntaje enviado exitosamente");
  } catch (error) {
    console.error("Error al enviar el puntaje: ", error);
  }
};

// Función para obtener puntaje de un usuario
export const obtenerPuntaje = async (userId) => {
  try {
    const docRef = doc(db, "puntajes", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Puntaje del usuario: ", docSnap.data().score);
      return docSnap.data().score;
    } else {
      console.log("No se encontró el puntaje del usuario");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener el puntaje: ", error);
  }
};