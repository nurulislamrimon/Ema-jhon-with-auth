// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDuGP0rXDGoSSrkqMT_lsvGmD0kIKCi28",
    authDomain: "email-password-auth-ae35a.firebaseapp.com",
    projectId: "email-password-auth-ae35a",
    storageBucket: "email-password-auth-ae35a.appspot.com",
    messagingSenderId: "470248642728",
    appId: "1:470248642728:web:9314ce8fa8dd27fd6fca9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;