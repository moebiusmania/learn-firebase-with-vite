import { initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { FBConf } from "../types";

// import.meta.env.VITE_KEY - environment variables from .env file
// https://vitejs.dev/guide/env-and-mode.html#env-files

const firebaseConfig: FBConf = {
  // apiKey: import.meta.env.VITE_API_KEY,
  // authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_SENDER_ID,
  appId: import.meta.env.VITE_APPID,
};

initializeApp(firebaseConfig);

// Database reference
const db: Firestore = getFirestore();

export { db };
