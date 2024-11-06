// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0KUcI9blN4KM_WjEEK2w5EaklFlD5stE",
    authDomain: "movie-recommendation-trial-2.firebaseapp.com",
    projectId: "movie-recommendation-trial-2",
    storageBucket: "movie-recommendation-trial-2.firebasestorage.app",
    messagingSenderId: "780160776702",
    appId: "1:780160776702:web:54e36c3cebe44862cfa8af"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase initialized:", app.options);
const analytics = getAnalytics(app);

export const auth = getAuth(app);