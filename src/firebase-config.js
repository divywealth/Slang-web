// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPRQnHwy6dp07WzHBEV5Bygts_4ULrkb4",
  authDomain: "slang-be.firebaseapp.com",
  projectId: "slang-be",
  storageBucket: "slang-be.appspot.com",
  messagingSenderId: "535113926559",
  appId: "1:535113926559:web:dca0fa494cdd25bfb05faa",
  measurementId: "G-6CLQ1XTW5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;