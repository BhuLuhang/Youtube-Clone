// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyC6YiEPffYRPC4L8iBRcU8m2sAu_UM6c7A",

  authDomain: "mytube-edd25.firebaseapp.com",

  projectId: "mytube-edd25",

  storageBucket: "mytube-edd25.appspot.com",

  messagingSenderId: "395966877927",

  appId: "1:395966877927:web:4cb494071db1bdf53cd242"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(); 
export const provider = new GoogleAuthProvider();
export default app;