// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4xG-vTNNA0Dt59ne3lwPa4erXcqQvvGA",
    authDomain: "family-event.firebaseapp.com",
    projectId: "family-event",
    storageBucket: "family-event.appspot.com",
    messagingSenderId: "177998692673",
    appId: "1:177998692673:web:eb2e1fc63e7bef8ba261c0",
    measurementId: "G-J8T6NCJD6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage_bucket = getStorage(app);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
