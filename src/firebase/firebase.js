// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA5szgX6YkV3jxUq6YXoTrGx1El27Mzxo",
  authDomain: "react-kpop.firebaseapp.com",
  projectId: "react-kpop",
  storageBucket: "react-kpop.appspot.com",
  messagingSenderId: "854563444213",
  appId: "1:854563444213:web:fb634952224862ddec3cbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initializing Auth
export const auth = getAuth(app);