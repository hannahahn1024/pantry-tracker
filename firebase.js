// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGof-rrcThinpEUjugV3MThv0oKVt0BnQ",
  authDomain: "pantry-tracker-d8727.firebaseapp.com",
  projectId: "pantry-tracker-d8727",
  storageBucket: "pantry-tracker-d8727.appspot.com",
  messagingSenderId: "783510617034",
  appId: "1:783510617034:web:7ffedd502c0a2139476d33",
  measurementId: "G-9BZSRW5VQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};