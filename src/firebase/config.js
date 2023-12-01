// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4yR4fhuUUjMyjEp_rzyqAUuIRLJHsjRk",
  authDomain: "quincyvault.firebaseapp.com",
  projectId: "quincyvault",
  storageBucket: "quincyvault.appspot.com",
  messagingSenderId: "122430009471",
  appId: "1:122430009471:web:0a5fbf720c75ae8023cf4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);