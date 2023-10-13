// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9EB8fNAhKhmV0mWWhgxSPDmON9qtdgoM",
  authDomain: "netflex-gpt.firebaseapp.com",
  projectId: "netflex-gpt",
  storageBucket: "netflex-gpt.appspot.com",
  messagingSenderId: "349776293238",
  appId: "1:349776293238:web:06448e55f75dd7be139e57",
  measurementId: "G-VQESPYSHCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);