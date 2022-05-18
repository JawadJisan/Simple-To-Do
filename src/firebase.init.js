// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgCUOExIJDWfyVskgWKTAQelYDCMRFfWI",
  authDomain: "simple-to-do-b6606.firebaseapp.com",
  projectId: "simple-to-do-b6606",
  storageBucket: "simple-to-do-b6606.appspot.com",
  messagingSenderId: "749506093629",
  appId: "1:749506093629:web:36e2d594353746f4d88054"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;