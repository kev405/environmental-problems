import { create } from "zustand";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  FacebookAuthProvider,
  OAuthProvider,
  createUserWithEmailAndPassword, 
  updateProfile,
  signInWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../../firebase.config";

const provider = new GoogleAuthProvider();

const providerFacebook = new FacebookAuthProvider();

const AppleProvider = new OAuthProvider('apple.com');

const useAuthStore = create((set) => ({
  user: null,
  loading: true,

  loginGoogleWithPopUp: async () => {
    await signInWithPopup(auth, provider)
    .catch((error) => {
      console.log(error);
    });
  },

  loginFacebookWithPopUp: async () => {
    await signInWithPopup(auth, providerFacebook)
    .catch((error) => {
      console.log(error);
    });
  },

  loginAppleWithPopUp: async () => {
    await signInWithPopup(auth, AppleProvider)
    .catch((error) => {
      console.log(error);
    });
  },

  logout: async () => {
    await signOut(auth)
      .then(() => {
        set({ user: null });
      })
      .catch((error) => {
        console.log(error);
      });
  },

  register: async (values) => {
    const { email, password, name } = values;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(userCredential.user, {
        displayName: name,
      });

    } catch (error) {
      setError("Error al registrar: " + error.message);
    }
  },

  login: async (values) => {
    try {
      const { email, password } = values;
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError("Error al iniciar sesión: " + error.message);
    }
  },

  observeAuthState: () => {
    set({ loading: true });
    onAuthStateChanged(auth, (user) => {
      if (user) {
        set({ user, loading: false });
      } else {
        set({ user: null, loading: false });
      }
    });
  },
}));

export default useAuthStore;
