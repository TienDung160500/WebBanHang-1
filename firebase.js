// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_API_APP_ADMIN_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "levents-b7ba2",
  storageBucket: "levents-b7ba2.appspot.com",
  messagingSenderId: "353627585349",
  appId: "1:353627585349:web:99d7c40b1a265b34f51c2c",
  measurementId: "G-ZY762ZRF6E"
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);