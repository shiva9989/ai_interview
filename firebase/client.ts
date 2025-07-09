import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAokPSxrXqcyZAQ9fV2D1wercq-NQar4Xc",
    authDomain: "prepwise-369ad.firebaseapp.com",
    projectId: "prepwise-369ad",
    storageBucket: "prepwise-369ad.firebasestorage.app",
    messagingSenderId: "450442782198",
    appId: "1:450442782198:web:c12e712d68270d739293d7",
    measurementId: "G-PG3BDG9VHM"
};


const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);