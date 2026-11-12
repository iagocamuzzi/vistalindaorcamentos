// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF6QHeH1dDofYK_wUiekwkQwwFO4SWPQs",
  authDomain: "otica-orcamentos.firebaseapp.com",
  databaseURL: "https://otica-orcamentos-default-rtdb.firebaseio.com",
  projectId: "otica-orcamentos",
  storageBucket: "otica-orcamentos.firebasestorage.app",
  messagingSenderId: "884109670145",
  appId: "1:884109670145:web:8edc75a426c56807490d00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);