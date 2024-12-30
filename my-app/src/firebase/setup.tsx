import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFAQTWNdbukNMAwfQ0V0qlUq_2P8_dl6k",
  authDomain: "olx-clone-8dc20.firebaseapp.com",
  projectId: "olx-clone-8dc20",
  storageBucket: "olx-clone-8dc20.firebasestorage.app",
  messagingSenderId: "444892208812",
  appId: "1:444892208812:web:571d0ece0b50b1410b8909"
};

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const googleProvider= new GoogleAuthProvider()