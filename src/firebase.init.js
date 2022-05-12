// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbPLVHVZNqyI2aHit5lh2IJhOrjDG3CNs",
    authDomain: "gymhero-6dd95.firebaseapp.com",
    projectId: "gymhero-6dd95",
    storageBucket: "gymhero-6dd95.appspot.com",
    messagingSenderId: "101577938329",
    appId: "1:101577938329:web:f79b76ee1946a1dbeb2f08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;