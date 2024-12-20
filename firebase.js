// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-sL9H70ocXKEhF55c91mtcKHYFrUPFPM",
  authDomain: "socialdemure.firebaseapp.com",
  projectId: "socialdemure",
  storageBucket: "socialdemure.firebasestorage.app",
  messagingSenderId: "115846983415",
  appId: "1:115846983415:web:4493f675b039983b08edf2",
  measurementId: "G-3BJ2QTEDNS"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
