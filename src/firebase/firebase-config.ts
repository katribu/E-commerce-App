import { FirebaseApp, initializeApp } from "firebase/app";
import {Auth, getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlEB3rgkEC6k08hXcT-n2392adO4Qe6C8",
  authDomain: "tsp-redux-firebase.firebaseapp.com",
  projectId: "tsp-redux-firebase",
  storageBucket: "tsp-redux-firebase.appspot.com",
  messagingSenderId: "340371230000",
  appId: "1:340371230000:web:afbbfcce175c28f14f4cf5",
  measurementId: "G-K6XMWWBZ12"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()