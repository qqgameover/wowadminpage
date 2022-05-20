import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyAdzRGnYxFXls-LxG8pBmgTN0aTDbfTJPw",
    authDomain: "wishotherswell-82682.firebaseapp.com",
    databaseURL: "https://wishotherswell-82682-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "wishotherswell-82682",
    storageBucket: "wishotherswell-82682.appspot.com",
    messagingSenderId: "416443676626",
    appId: "1:416443676626:web:7e24c3d0ad353b17693a0b",
    measurementId: "G-ZM70JWY8JE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
