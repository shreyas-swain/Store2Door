  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import {getAuth} from 'firebase/auth'
  import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDrOfv7q5Gn0DJurM5R5uIBNPsa9-MzlLo",
    authDomain: "store2door-28221.firebaseapp.com",
    projectId: "store2door-28221",
    storageBucket: "store2door-28221.appspot.com",
    messagingSenderId: "748833137876",
    appId: "1:748833137876:web:351daa53601092e4cbc741",
    measurementId: "G-V59ZN42BNM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const store = getStorage(app, "gs://store2door-28221.appspot.com");
  export {db, auth, store}