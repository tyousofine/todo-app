
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPqmzmA3Cb9XgiKeuNk9P9PTE59at2O-4",
    authDomain: "todo-app-9f9fb.firebaseapp.com",
    projectId: "todo-app-9f9fb",
    storageBucket: "todo-app-9f9fb.appspot.com",
    messagingSenderId: "98914136717",
    appId: "1:98914136717:web:43549b72eb7e0a8411e8c4"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);