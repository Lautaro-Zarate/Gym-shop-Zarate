import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAjSALptsQSvkxsSoFfQL4sWcPfRBXLxAA",
    authDomain: "gym-shop-f9be3.firebaseapp.com",
    projectId: "gym-shop-f9be3",
    storageBucket: "gym-shop-f9be3.firebasestorage.app",
    messagingSenderId: "891173820901",
    appId: "1:891173820901:web:25adee272d308ec140370c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);