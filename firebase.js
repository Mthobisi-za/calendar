//const firebase = require("firebase");
// Required for side-effects
//require("firebase/firestore");



import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBivzi0jgULAKPXBQBekiJWyLK_MgkNneo",
    authDomain: "mtho-reall.firebaseapp.com",
    projectId: "mtho-reall",
    storageBucket: "mtho-reall.appspot.com",
    messagingSenderId: "936946323838",
    appId: "1:936946323838:web:e3627e458fd7f9a09b232f",
    measurementId: "G-74V3H1NVNS"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();




