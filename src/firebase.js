// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh569Z-p-Lnxo2r2AjjVLfL-OtXwhkH40",
  authDomain: "login-practise-d22bf.firebaseapp.com",
  projectId: "login-practise-d22bf",
  storageBucket: "login-practise-d22bf.appspot.com",
  messagingSenderId: "145838659452",
  appId: "1:145838659452:web:90c3cb47ccab0b4da176f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app;
