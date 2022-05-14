// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4WkD4OC0oJ__htwp96J_00iRlRnGp4gU",
    authDomain: "ema-jhon-simple-cd1c4.firebaseapp.com",
    projectId: "ema-jhon-simple-cd1c4",
    storageBucket: "ema-jhon-simple-cd1c4.appspot.com",
    messagingSenderId: "585918714348",
    appId: "1:585918714348:web:5d33e76ad33700190430c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;