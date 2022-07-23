import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDmAjgz9YSaJjjQxHDAQwxUe1gvNlW7BTc",
    authDomain: "rentappupgraded.firebaseapp.com",
    projectId: "rentappupgraded",
    storageBucket: "rentappupgraded.appspot.com",
    messagingSenderId: "1040817587698",
    appId: "1:1040817587698:web:03a8921996f19cf82cd76b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;