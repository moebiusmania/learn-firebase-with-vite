import { initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { FBConf } from "./types";

// import.meta.env.VITE_KEY - legge il valore di una chiave nel file .env
// https://create-react-app.dev/docs/adding-custom-environment-variables/

const firebaseConfig: FBConf = {
  // apiKey: import.meta.env.VITE_API_KEY,
  // authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: "learn-firebase-with-reac-7777c",
  // storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_SENDER_ID,
  appId: import.meta.env.VITE_APPID,
};

initializeApp(firebaseConfig);

// Riferimento al database
const db: Firestore = getFirestore();

export { db };
