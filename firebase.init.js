// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB96oG5AQJ86nNGw0yz-FUTpiEqbgrxDVs",
    authDomain: "camping-gears-ac126.firebaseapp.com",
    projectId: "camping-gears-ac126",
    storageBucket: "camping-gears-ac126.appspot.com",
    messagingSenderId: "94812875043",
    appId: "1:94812875043:web:a49845fcb21cbd23520496"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

