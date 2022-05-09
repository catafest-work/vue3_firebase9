// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// need to add auth methods
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8R4kv00BA68JWPU9VU4wh2P9-eGkXDY0",
  authDomain: "vue-firebase-17d5f.firebaseapp.com",
  projectId: "vue-firebase-17d5f",
  storageBucket: "vue-firebase-17d5f.appspot.com",
  messagingSenderId: "44391199142",
  appId: "1:44391199142:web:68b706dbd92c149a511f67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }