// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBENwmphBS959nMXNd3UD7uPaKqqix3ZG0",
  authDomain: "labcommerce-8765f.firebaseapp.com",
  projectId: "labcommerce-8765f",
  storageBucket: "labcommerce-8765f.appspot.com",
  messagingSenderId: "204673748946",
  appId: "1:204673748946:web:5226976035b2972f17820b",
  measurementId: "G-S7N102X924"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
export {db}
